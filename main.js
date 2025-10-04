document.querySelectorAll('.map-pin').forEach(pin => {
  const tooltip = document.getElementById('tooltip');

  const show = () => {
    // العنوان (اسم المنطقة) بولد، والباقي نص عادي مع <br>
    tooltip.innerHTML = `<strong>${pin.dataset.city}</strong><br>${pin.dataset.info}`;
    tooltip.style.display = 'block';
    tooltip.style.top = (pin.offsetTop - 40) + 'px';
    tooltip.style.left = (pin.offsetLeft + 20) + 'px';
    tooltip.classList.add('show');
  };

  const hide = () => {
    tooltip.style.display = 'none';
    tooltip.classList.remove('show');
  };

  pin.addEventListener('mouseenter', show);
  pin.addEventListener('mouseleave', hide);
  pin.addEventListener('touchstart', show);
  pin.addEventListener('touchend', hide);
});
