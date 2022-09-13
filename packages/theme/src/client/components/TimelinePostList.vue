<template>
  <div class="timeline-section">
    <ul class="timeline-content">
      <li class="timeline-title">时光轴</li>
      <li v-for="(item, index) in data" :key="index">
        <h2 class="year">{{ item.year }}</h2>
        <ul class="item-wrapper">
          <li
            v-for="(subItem, subIndex) in item.data"
            :key="subIndex"
            class="item"
          >
            <span class="date"> {{ dateFormat(subItem.info.date) }} </span>
            <RouterLink :to="subItem.path">
              <span class="title"> {{ subItem.info.title }} </span>
            </RouterLink>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from "vue";
import type { GungnirThemePostData } from "../../shared";

const dateFormat = (date) => {
  const renderTime = (date) => {
    const dateee = new Date(date).toJSON();
    return new Date(+new Date(dateee) + 8 * 3600 * 1000)
      .toISOString()
      .replace(/T/g, " ")
      .replace(/\.[\d]{3}Z/, "")
      .replace(/-/g, "/");
  };
  date = renderTime(date);
  const dateObj = new Date(date);
  const mon = dateObj.getMonth() + 1;
  const day = dateObj.getDate();
  return `${mon}-${day}`;
};

defineProps({
  data: {
    type: Array as PropType<
      Array<{ year: string; data: GungnirThemePostData[] }>
    >,
    default: () => []
  }
});
</script>
