---
layout: post
title: "RACF 实验"
subtitle: 'RACF Experiments'
author: "Renovamen"
date: 2019-04-03
header_img: /img/in-post/2019-04-03/header.png
catalog: true
tags:
  - 主机
---

对我认为的本科最难的课（2333）第一次实验的流水账式记录。

希望早日脱离大型机的苦海，阿门。

<!-- more -->

## 1. 创建组

### 1.1 组的结构

![](/img/in-post/2019-04-03/racf-2.1.png)



### 1.2 登陆 TSO

以 RACFLAB 组管理员身份登陆TSO：

1. 以 ST016 用户身份登录 TSO，进 ISPF；

2. "P" $\rightarrow$ "6"（或直接"P.6"）

3. 使用 `LU` RACF 命令查看 ST016 的属性

   ```
   LU ST016
   ```

   

### 1.3 在 RACFLAB 下定义子组

利用 RACF 命令定义以下子组：

- 定义 DIV16ADM 用户管理组（相当于公司人事部门），RACF 命令：

  ```
  ADDGROUP DIV16ADM OWNER(RACFLAB) SUPGROUP(RACFLAB)
  ```

- 定义 DIV16FUN 功能组（相当于公司各职能部门），后继实验将在该组下定义各个子功能组，RACF 命令：

  ```
  ADDGROUP DIV16FUN OWNER(RACFLAB) SUPGROUP(RACFLAB)
  ```

- 定义 DIV16RES 资源组（为有机组织和保护系统资源—包括数据集 / CICS 交易 / 系统和用户程序等资源—而设立的组），后继实验将在该组下定义各个子资源组，RACF 命令：

  ```
  ADDGROUP DIV16RES OWNER(RACFLAB) SUPGROUP(RACFLAB)
  ```



利用 RACF 命令查看新建的组进行验证：

```
LG DIV16ADM
LG DIV16FUN
LG DIV16RES
```



### 1.4 在 DIV16FUN 下定义子组（功能组）

利用 RACF 命令定义以下子组：

- 定义 FUN16PRD 功能组，该组将用于对生产系统数据集（Production Data Sets）的访问进行集中授权（即如果该组对生产系统数据集有访问权限，该组的成员将自动继承这一权限），RACF 命令：

  ```
  ADDGROUP FUN16PRD OWNER(DIV16FUN) SUPGROUP(DIV16FUN)
  ```

- 定义 FUN16TST 功能组，该组将用于对测试系统数据集（Test Data Sets）的访问进行集中授权（即如果该组对测试系统数据集有访问权限，该组的成员将自动继承这一权限），RACF 命令：

  ```
  ADDGROUP FUN16TST OWNER(DIV16FUN) SUPGROUP(DIV16FUN)
  ```



### 1.5 在 DIV16RES 下定义子组（资源组）
利用 RACF 命令定义以下子组（RACF 中数据集 Profile 的 HLQ 必须是 RACF 系统中的一个用户或者组，这里为即将要保护的数据集 RES16PRD.* 和 RES16TST 定义 2 个子组）：

- 定义 RES16PRD 资源组，该组将用于保护生产系统的数据集。RACF 命令：

  ```
  ADDGROUP RES16PRD OWNER(DIV16RES) SUPGROUP(DIV16RES)
  ```

- 定义 RES16TST 资源组，该组将用于保护测试系统的数据集。RACF 命令：

  ```
  ADDGROUP RES16TST OWNER(DIV16RES) SUPGROUP(DIV16RES)
  ```



### 1.6 查找组 Profile 

```
SEARCH CLASS(GROUP) MASK(DIV16)
```

 


&nbsp;
## 2. 用户管理

![](/img/in-post/2019-04-03/racf-3.1.png)

### 2.1 新建用户

1. 在不太了解用户需要什么权限的情况下，一般只给出最低权限，利用 RACF 命令完成以下设置：
   1. 指定用户的默认组为 DIV16ADM 
   2. 为用户指定初始密码 
   3. 考虑为用户指定 OWNER 
   4. 新增以下用户: 
      1. TSO1601  for user Janet Smith 
      2. TSO1602  for user Robert Anderson 
      3. TSO1603  for user Leslie Brown 
      4. TSO1604  for user Arthur Fielding 
      5. TSO1605  for user Susan Johnson

   ```
   ADDUSER TSO1601 OWNER(DIV16ADM) DFLTGRP(DIV16ADM) PASSWORD(PASS)
   # 以此类推
   ```

2. 查看用户是否建立成功

   ```
   LU TSO1601
   ```

   查看用户的 TSO 段是否有内容

   ```
   LU TSO1601 TSO
   ```

3. 如果用户 Profile 没有指定 TSO 段的内容，用户将无法顺利登陆 TSO 系统，需要为用户指定 TSO 段信息

   ```
   ALU TSO1601 TSO(PROC(IKJDB2) ACCTNUM(#ACCT) SIZE(4096))
   ```

4. 用户登陆 TSO 之后，如果要进入 ISPF 面板系统，首次进入 ISPF 系统时系统会自动为用户建立几个编目的数据集，通常普通用户的文件无法在主机系统主目录（Master Catalog）中进行编目，所以，要实现为新用户创建好用户目录（User Catalog）和别名（Alias）。

   ```
   DEFINE ALIAS(NAME(TSO1601) RELATE('CATALOG.UCAT.STGRP'))
   ```

   在 OPTION3.4 中 DSN Level 输入 TSO1601 回车，看是否显示其 "ALIAS"，如果出现类似下面的结果则表明 ALIAS 创建成功：

   ```bash
   DSLIST - Data Sets Matching TSO1601                       Row 1 of 3
   
   Command - Enter "/" to select action           Message        Volume
   ---------------------------------------------------------------------
   TSO1601                                                 *ALIAS
   ************************ End of Data Set list ***********************
   ```

   


### 2.2 重置用户密码

当用户忘记密码的时后需要管理员 ST016 为该用户重新指定一个初始密码。

场景：Janet Smith（TSO1601）遗忘了密码：

```
ALU TSO1601 PASSWORD(PASS)
```



### 2.3 Revoke 用户

当用户帐号暂时不用的时候，安全起见应该将该帐号挂起（Revoke）。
场景：Arthur Fielding（TSO1604）将会出差一段时间，在这段时间应将该用户的帐号挂起：

```
ALU TSO1601 REVOKE
```



### 2.4 Resume 用户

当挂起的用户帐号需要重新启用的时候，应该及时地将帐号 Resume。
场景：Arthur Fielding（TSO1604）出差回来，希望能够继续使用以前的帐号：

```
ALU TSO1601 RESUME
```



### 2.5 Search 查找

使用 Search 命令查找以上新建的用户 Profile

```
SEARCH CLASS(USER) MASK(TSO1601)
```



### 2.6 将用户关联到组

RACF 中给用户访问资源权限的最佳方法是将用户关联到可以访问这些资源的组中，这些组称为功能组（Functional Group）。

- 将用户 Arthur Fielding（TSO1604）连接到组 FUN16PRD，实现其对生产数据集的访问：

  ```
  CONNECT TSO1604 GROUP(FUN16PRD)
  ```

- 将用户 Susan Johnson（TSOxx05）连接到组 FUN16TST，实现其对测试数据集的访问：

  ```
  CONNECT TSO1605 GROUP(FUN16TST)
  ```



### 2.7 验证用户是否关联到组

```
LU TSO1604
LU TSO1605
LG FUN16PRD
LG FUN16TST
```




&nbsp;
## 3. 分散式 RACF 安全管理

**目的：**实现 RACF 中的管理权限下放（Delegation）

**内容：**新建几个管理员用户，其中一个管理员负责用户安全的管理，一个管理员负 责将用户连接到功能组，另外一个管理员管控制对数据集资源的访问：

|USER|AUTHORITY|
|-------|----------------|
|TSO1601|group special for DIV16ADM|
|TSO1602|connect authority for FUN16PRD & FUN16TST|
|TSO1603|create authority for RES16PRD & RES16TST|



![](/img/in-post/2019-04-03/racf-4.1.png)



### 3.1 用户身份定位

- TSO1601（Janet Smith）：该管理员将对 DIV16ADM 组用户的安全进行管理，包括为用户重置密码，挂起和启用用户：

  ```
  CONNECT TSO1601 GROUP(DIV16ADM) SPECIAL
  ```

- TSO1602（Robert Anderson）：该管理员可以将用户关联到 DIV16FUN 组下的子功能组中，以实现用户对特定数据的访问权限：

  ```
  CONNECT TSO1602 GROUP(FUN16PRD) AUTHORITY(CONNECT)
  CONNECT TSO1602 GROUP(FUN16TST) AUTHORITY(CONNECT)
  ```

- TSO1603（Leslie Brown）：该管理员可以为 RES16PRD 和 RES16TST 组数据集创建数据集 PROFILE，以控制用户对组数据集的访问：

  ```
  CONNECT TSO1603 GROUP(RES16PRD) AUTHORITY(CREATE)
  CONNECT TSO1603 GROUP(RES16TST) AUTHORITY(CREATE)
  ```



### 3.2 测试

测试步骤1的功能是否实现：

1. 以 TSO1601 身份登陆 TSO，尝试修改用户密码等

   ```
   ALU TSO1602 PASSWORD(PASS)
   ```

2. 以 TSO1602 身份登陆 TSO，将 TSO1601 用户关联到 FUN16PRD 和 FUN16TST：

   ```
   CONNECT TSO1601 GROUP(FUN16PRD) 
   CONNECT TSO1601 GROUP(FUN16TST)
   ```

3. 以 TSOxx02 身份登陆 TSO，将 TSO1601 从 FUN16PRD 和 FUN16TST 组中移走： 

   ```
   REMOVE TSO1601 GROUP(FUN16PRD)
   REMOVE TSO1601 GROUP(FUN16TST)
   ```




&nbsp;
## 4. 数据集保护 I

**目的：**实现对用户数据集和组数据集的保护。

**内容：**首先保护用户数据集，然后对生产数据集和测试数据集进行保护，然后进行授权后的验证。

为了简化实验，RES16PRD 和 RES16TST 组既是 Data Control Group，也是 Resource Onwership Group。 



### 4.1 保护数据集

保护以下用户的数据集，保护准则：只有用户本身可以访问自己的数据集，其他人都不能访问。（用户的数据集是指以用户名为 HLQ 的所有数据集）

- TSO1601  for user Janet Smith 

- TSO1602  for user Robert Anderson 

- TSO1603  for user Leslie Brown 

- TSO1604  for user Arthur Fielding 

- TSO1605  for user Susan Johnson 

以 TSO1601 身份登陆 TSO 然后执行 RACF 命令：

```
ADDSD 'TSO1601.**' UACC(NONE) 
ADDSD 'TSO1602.**' UACC(NONE) 
ADDSD 'TSO1603.**' UACC(NONE) 
ADDSD 'TSO1604.**' UACC(NONE) 
ADDSD 'TSO1605.**' UACC(NONE) 
```



### 4.2 查看 PROFILE

查看步骤1创建的用户数据集PROFILE：

```
LISTDSD DA('TSO1601.**') ALL
LISTDSD DA('TSO1602.**') ALL
LISTDSD DA('TSO1603.**') ALL
LISTDSD DA('TSO1604.**') ALL
LISTDSD DA('TSO1605.**') ALL
```



### 4.3  定义 RPOFILE + 赋 ALTER 权

定义RES16TST组数据集的RPOFILE。在前面的实验中，TSO1603 被指定为 RES16PRD 和 RES16TST 的 Create 用户，以拥有对这 2 个组的数据集的保护权限。

1. 以 TSO1603 登陆 TSO，对 RES16TST 数据集进行以下保护：

   - Audit all unsuccessful accesses (Hint: AUDIT)

   - Make the owner TSO1603 (Hint: OWNER)

   - No other users or groups should have access (Hint: UACC) 

   ```
   ADDSD 'RES16TST.**' AUDIT(FAILURES) OWNER(TSO1603) UACC(NONE)
   ```

   

   修改上面定义的 `RES16TST.**` PORFILE的访问列表，给FUN16TST组赋予ALTER访问权限：

   ```
   PERMIT 'RES16TST.**' ID(FUN16TST) ACCESS(ALTER)
   ```

   

2. 对 RES16PRD 数据集进行以下保护：

   - Audit all unsuccessful accesses (AUDIT)

   - Audit successful accesses at UPDATE and higher (AUDIT) 

   - Make the owner TSO1603 (OWNER)

   - No other users or groups should have access (UACC) 

   ```
   ADDSD 'RES16PRD.**' AUDIT(FAILURES SUCCESS(UPDATE)) OWNER(TSO1603) UACC(NONE)
   ```

   

   修改上面定义的 `RESxxPRD.**` PORFILE的访问列表，给FUN16PRD组赋予ALTER访问权限：

   ```
   PERMIT 'RES16PRD.**' ID(FUN16PRD) ACCESS(ALTER)
   ```



### 4.4 验证

确定组数据集 PROFIEL 是否创建并按照预定的要求保护成功

```
LISTDSD DATASET('RES16TST.**') ALL
LISTDSD DATASET('RES16PRD.**') ALL
```



### 4.5 创建组数据集

以 ST016 用户登陆 TSO，创建 RES16TST 和 RES16PRD 组数据集：

1. 创建 ALIAS：RES16TST 和 RES16PRD

   ```
   DEFINE ALIAS(NAME(RES16TST) RELATE(CATALOG.UCAT.STGRP))
   DEFINE ALIAS(NAME(RES16PRD) RELATE(CATALOG.UCAT.STGRP))
   ```

2. 测试是否成功

   在 OPTION 3.4 中 DSN Level 分别输入 RES16TST**、**RES16PRD，回车，看是否显示其 Alias。



以 TSO1603 登陆 TSO 并创建组数据集：

创建一个顺序数据集 RES16PRD.DATA (RECFM=FB, LRECL=80) 和 RES16TST.DATA (RECFM=FB, LRECL=80) 

```
                        Allocate New Data Set
Data Set Name  . . . : RESxxPRD.DATA
Management class . . .       (Blank for default management class)
Storage class  . . . .       (Blank for default storage class)
 Volume serial . . . .       (Blank for system default volume) **
 Device type . . . . .       (Generic unit or device address) **
Data class . . . . . .       (Blank for default data class)
 Space units . . . . . TRKS  (BLKS, TRKS, CYLS, KB, MB, BYTES or RECORDS)
 Average record unit         (M, K, or U)
 Primary quantity  . . 1     (In above units)
 Secondary quantity    1     (In above units)
 Directory blocks  . .       (Zero for sequential data set) *
 Record format . . . . FB
 Record length . . . . 80 
 Blocksize   . . . . . 
 Data set name type :        (LIBRARY, HFS, PDS, or blank)  *
                             (YY/MM/DD, YYYY/MM/DD
 Expiration date . . .        YY.DDD, YYYY.DDD in Julian form
Enter "/" to select option    DDDD for retention period in days
   Allocate Multiple Volumes  or blank)

( * Specifying LIBRARY may override zero directory block)

( ** Only one of these fields may be specified)
```



### 4.6 验证

- 验证 TSO1604 访问 RES16PRD 组数据集：成功访问；

- 验证 TSO1604 访问 RES16TST 组数据集：拒绝访问；
- 验证 TSO1605 访问 RES16TST 组数据集的保护：成功访问。

- 以 TSO1601 登陆，删除 RES16PRD 打头的数据集（如 `RES16PRD.DATA`）

  保留 TSO1601 登陆的 Session，再打开一个新的 Session，以 TSO1603 登陆 TSO，修改 `RESxxPRD.**` Profile，给 TSO1601 赋 ALTER 权：

  ```
  PERMIT 'RES16PRD.**' ID(TSO1601) ACCESS(ALTER) 
  ```

  测试：
  - 再尝试用 TSO1601 用户删除 `RES16PRD.DATA`
  - TSO1601 重新登陆后再尝试删除 `RES16PRD.DATA`




&nbsp;
## 5. 数据集保护 II

目的：实现对用户数据集和组数据集的保护

内容：创建数据集，确定创建数据集需要的权限，然后建立 Generic PROFILE 对数据集进行保护，最后对 PROFILE 的 Warning 状态进行理解和配置，并使用 LISTDSD 命令确定最佳匹配 PROFILE 和确定 Generic PROFILE 所保护的数据集范围。



### 5.1 创建全匹配 PROFILE

为 RES16PRD.DATA 创建全匹配 PROFILE。以 TSO1603 登陆（RES16PRD 组 CREATE 特权人员，即数据管理人员），为 `RES16PRD.DATA` 创建一个全匹配的 PROFILE 进行保护：

```
ADDSD 'RES16PRD.DATA' UACC(READ)
```



### 5.2 打开 Warning 状态

以 TSO1603 登陆，把 `RES16TST.**` PROFILE 的 Warning 状态打开：

```
ALTDSD 'RES16TST.**' WARNING
```

测试：以 TSO1604 登陆，浏览 `RES16TST.DATA` 数据集



### 5.3 关闭 Warning 状态

以 TSO1603 登陆，把 `RES16TST.**` PROFILE 的 Warning 状态关闭：

```
ALTDSD 'RES16TST.**' NOWARNING
```

测试：以 TSO1604 登陆，浏览 `RES16TST.DATA` 数据集



### 5.4 UPDATE 权限

TSO1603 登陆。假设 `RES16PRD.NEWAPPL.FINANCE.DATA` 和 `RES16PRD.NEWAPPL.HR.DATA` 是一个新应用系统的 2 个数据集，FUN16TST 组需要对这 2 个数据集有 UPDATE 权限，而不能对其他应用系统的数据集有操作权限。注意，FUN16PRD 组仍然需要对所有的 RES16PRD 数据集保留原有的操作权限。

```
ADDSD 'RES16PRD.NEWAPPL.**' UACC(NONE) FROM('RES16PRD.**')
PERMIT 'RES16PRD.NEWAPPL.**' ID(FUN16TST) ACC(UPDATE)
```



检测哪一个 PROFILE 在保护 `RES16PRD.NEWAPPL.FINANCE.DATA` 和 `RES16PRD.NEWAPPL.HR.DATA`：

```
LISTDSD DATASET('RES16PRD.NEWAPPL.FINANCE.DATA') GEN
LISTDSD DATASET('RES16PRD.NEWAPPL.HR.DATA') GEN
```



检测一个 Generic PROFILE `RES16PRD.**` 保护了那些数据集：

```
LISTDSD DATASET('RES16PRD.**') DSNS
```




&nbsp;
## 6. 保护 TSO 资源

目的：授权用户登录 TSO

内容：该实验将首先为 AP（Application Programmer）和 SP（System Programmer）用户建立组结构，然后为 TSO 的登陆过程（TSOPROC）和用户帐号（ACCTNUM建立一些通用资源 PROFILE 进行保护，接着新增 AP/SP 用户 PROFILE，对 TSO 段进行赋值，并对他们授权访问 TSO。

组结构：

![](/img/in-post/2019-04-03/racf-7.1.png)



### 6.1 创建组结构

1. 在 DIV16FUN 下创建子组 FUN16AP

   ```
   ADDGROUP FUN16AP OWNER(DIV16FUN) SUPGROUP(DIV16FUN)
   ```

2. 在 DIV16FUN 下创建子组 FUN16SP

   ```
   ADDGROUP FUN16SP OWNER(DIV16FUN) SUPGROUP(DIV16FUN)
   ```

3. 在 DIV16RES 下创建子组 RES16TSO，用以管理 TSO 资源授权

   ```
   ADDGROUP RES16TSO OWNER(DIV16RES) SUPGROUP(DIV16RES)
   ```



### 6.2 新增用户

新增 AP 和 SP 用户，这些用户需要访问TSO

1. 新增 SP 用户 TSO1607，要求如下: 

   - OWNER和默认组应该是DIV16ADM

   - 可以登陆TSO 

     1. 账户使用 ACCT#Sxx
     2. 登陆过程使用 PROC#Sxx 
     3. Region 大小为 4096 

   ```
   ADDUSER TSO1607 OWNER(DIV16ADM) NAME('SYSTEM PROGRAMMER') DFLTGRP(DIV16ADM) PASSWORD(123456)
   
   ALU TSO1607 TSO(PROC(IKJDB2) ACCTNUM(#ACCT) SIZE(4096) COMMAN(ISPF))
   
   CONNECT TSO1607 GROUP(FUN16SP)
   ```



2. 新增 AP 用户 TSO1608，要求如下: 

   - OWNER和默认组应该是DIV16ADM

   - 可以登陆TSO 

     1. 账户使用 ACCT#Axx 
     2. 登陆过程使用 PROC#Axx 
     3. Region 大小为 4096 

   ```
   ADDUSER TSO1608 OWNER(DIV16ADM) NAME('SYSTEM PROGRAMMER') DFLTGRP(DIV16ADM) PASSWORD(123456)
   
   ALU TSO1608 TSO(PROC(IKJDB2) ACCTNUM(#ACCT) SIZE(4096) COMMAN(ISPF))
   
   CONNECT TSO1608 GROUP(FUN16AP)
   ```





### 6.3 创建登陆过程

为 TSO 用户创建一个新的登陆过程 PROC#Sxx 和 PROC#Axx。打开文件 VENDOR.PROCLIB ，在 Command 中输入：

```
S PROC#S16;COPY IKJDB2
S PROC#A16;COPY IKJDB2
```





### 6.4 保护登录过程

保护 PROC#Sxx 登陆过程（TSOPROC类）。

1. 创建通用资源 TSOPROC 的 RPOFILE，保护 AP 和 SP 的 TSO 登陆过程。

   授权规则：PROC#Sxx 只有 SP 才能使用（READ 权限），其他人不可以使用；PROC#Axx 只有 AP 才能使用（READ 权限），其他人不可以使用。

   ```
   RDEFINE TSOPROC PROC#S16 OWNER(DIV16FUN) UACC(NONE)
   PE PROC#S16 CLASS(TSOPROC) ID(FUN16SP) AC(READ)
   
   RDEFINE TSOPROC PROC#A16 OWNER(DIV16FUN) UACC(NONE)
   PE PROC#A16 CLASS(TSOPROC) ID(FUN16AP) AC(READ)
   ```



2. 浏览 PROC#Sxx 和 PROC#Axx PROFILE，它们用于保护不同的 TSO 登陆服务：

   ```
   RLIST TSOPROC PROC#S16 AUTHUSER
   RLIST TSOPROC PROC#A16 AUTHUSER
   ```



3. 刷新 TSOPROC 类在内存中的 PROFILE

   ```
   SETROPTS RACLIST(TSOPROC) REFRESH
   ```

   可能会提示不需要刷新。



### 6.5 保护 ACCTNUM

创建两个 TSO 账户（ACCTNUM），并创建一个通用资源 RPOFILE 保护该 ACCTNUM。

1. 创建 RPOFILE：ACCT#Sxx 该 ACCTNUM 为 SP 提供 TSO 登陆服务。

   授权规则：ACCT#Sxx 只有 SP 才能使用(READ 权限)，其他人不可以使用。

   ```
   RDEFINE ACCTNUM ACCT#S16 OWNER(DIV16FUN) UACC(NONE)
   PE ACCT#S16 CLASS(ACCTNUM) ID(FUN16SP) AC(READ)
   ```

   

2. 创建 PROFILE：ACCT#Axx 该 ACCTNUM 为 AP 提供 TSO 登陆服务。

   授权规则：ACCT#Axx 只有 AP 才能使用(READ 权限)，其他人不可以使用。

   ```
   RDEFINE ACCTNUM ACCT#A16 OWNER(DIV16FUN) UACC(NONE)
   PE ACCT#A16 CLASS(ACCTNUM) ID(FUN16AP) AC(READ)
   ```



3. 浏览 PROFILE：ACCT#Sxx 和 ACCT#Axx

   ```
   RLIST ACCTNUM ACCT#S16 AUTHUSER
   RLIST ACCTNUM ACCT#A16 AUTHUSER
   ```



### 6.6 保护 TSOAUTH
TSOAUTH 通用资源类提供保护 TSO 权限的功能，TSO 权限主要包括：ACCT，JCL，MOUNT， OPER，RECOVER 等。系统已经定义了一个 JCL PROFILE 用于保护 TSO 的 JCL 权限，该权限允许通过 TSO 向 JES 提交 JCL 批量作业。

1. （不做）为 SP 和 AP 用户赋权访问 JCL 权限：

   ```
   PE JCL CLASS(TSOAUTH) ID(FUN16AP FUN16SP) ACCESS(READ)
   ```

   

2. 查看 SP 和 AP 用户是否拥有提交 JCL 作业的权利：

   ```
   RLIST TSOAUTH JCL
   ```



### 6.7 保护用户数据集 

1. 保护 TSO1607 的用户数据集 

   ```
   ADDSD 'TSO1607.**' UACC(NONE)
   ```

   

2. 保护 TSO1608 的用户数据集 

   ```
   ADDSD 'TSO1608.**' UACC(NONE)
   ```



### 6.8 创建 ALIAS

为 TSOxx07 和 TSOxx08 创建 ALIAS（普通用户不能修改 Master Catalog，所以为了让用户可以创建自己的编目数据集，必须为用户创建 ALIAS，ALIAS 指向 User Catalog）。

1. 为 TSOxx07 创建别名

   ```
   DEFINE ALIAS(NAME(TSO1607) RELATE('CATALOG.UCAT.STGRP'))
   ```

   

2. 为 TSOxx08 创建别名

   ```
   DEFINE ALIAS(NAME(TSO1608) RELATE('CATALOG.UCAT.STGRP'))
   ```


&nbsp;
## 7. 使用 JCL 执行 RACF 命令

编写 JCL 作业，然后 SUBMIT：

```
//ST016R1 JOB CLASS=A,MSGLEVEL=(1,1),MSGCLASS=H,
// NOTIFY=ST016
//SEND EXEC PGM=IKJEFT01
//SYSPRINT DD DUMMY
//SYSTSPRT DD SYSOUT=*
//SYSTSIN DD *
SEARCH CLASS(GROUP) MASK(DIV16)
SEARCH CLASS(GROUP) MASK(FUN16)
SEARCH CLASS(GROUP) MASK(RES16)
SEARCH CLASS(USER) MASK(TSO16)
LG FUN16PRD
LG FUN16TST
LG FUN16SP
LG FUN16AP
SEARCH CLASS(DATASET) MASK(TSO16)
SEARCH CLASS(DATASET) MASK(RES16)
LISTDSD DA(TSO1601.**) AU
SEARCH CLASS(TSOPROC) FILTER(PROC#%16)
RLIST TSOPROC PROC#S16 AU
RLIST TSOPROC PROC#A16 AU
SEARCH CLASS(ACCTNUM) FILTER(ACCT#%16)
RLIST ACCTNUM ACCT#S16 AU
RLIST ACCTNUM ACCT#A16 AU
```