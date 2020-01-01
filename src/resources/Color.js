const Color = {
  get brandColorArray() {
    return Object.keys(this.brandColors)
      .map(color =>
        this.brandColors[color] === this.brandColors.darkBlue
          ? null
          : this.brandColors[color]
      )
      .filter(item => item !== null)
  },
  brandColors: {
    white: "#FFFFFF",
    purple: "#CB6CE5",
    darkBlue: "#472FDB",
    orange: "#FA914D",
    red: "#F95757",
    yellow: "#FDDE59",
    green: "#7ED957",
    skyBlue: "#5CE1E6",
  },
  primaryBackground: "#1E2227",
}

export default Color
