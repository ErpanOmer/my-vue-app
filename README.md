### 移动端压缩视频

```sh
ffmpeg -i input.mp4 -c:v libx264 -crf 23 -preset medium -vf "scale=-2:1080" -an output.mp4 
```

### pc 端压缩视频
```sh
ffmpeg -i input.mp4 -c:v libx264 -crf 24 -preset medium -an output.mp4
```