let counters = document.querySelectorAll('.counter');
let duration = 3000; // المدة الكلية بالمللي ثانية (2 ثانية مثلاً)
let steps = 100;     // عدد الخطوات الكلية
let interval = duration / steps;

counters.forEach(counter => {
  let startValue = 0;
  let endValue = parseInt(counter.getAttribute('data-target'));
  let increment = endValue / steps;
  let currentStep = 0;

  let count = setInterval(() => {
    currentStep++;
    startValue += increment;
    if (currentStep >= steps) {
      startValue = endValue;
      clearInterval(count);
    }
    counter.textContent = Math.floor(startValue).toLocaleString();
  }, interval);
});
