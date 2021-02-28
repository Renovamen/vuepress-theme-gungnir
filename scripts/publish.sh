for dir in ./packages/plugins/*
do
  if [ -d $dir ]
  then
    echo Trying to publish $dir ...
    (cd $dir; npm publish --access=public)
  fi
done

cd ./packages/theme-gungnir
npm publish
