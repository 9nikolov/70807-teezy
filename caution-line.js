document.addEventListener("DOMContentLoaded", function () {
  const cautionLines = document.querySelectorAll(".caution-line");
  const cautionText = "CAUTION ";

  cautionLines.forEach(function (cautionLine) {
    const repetitions = Math.ceil(cautionLine.offsetWidth);
    cautionLine.textContent = cautionText.repeat(repetitions);
  });
});
