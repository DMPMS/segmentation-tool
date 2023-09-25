export function randomColorGenerator(index: number): string {
  if (index <= 8) {
    let colors = [
      "#FFFF00",
      "#00FFFF",
      "#FF00FF",
      "#FFA500",
      "#4169E1",
      "#D36B4F",
      "#FF0000",
      "#0000FF",
      "#FF1493",
    ];

    return colors[index];
  } else {
    const characters = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
      color += characters[Math.floor(Math.random() * 16)];
    }

    return color;
  }
}
