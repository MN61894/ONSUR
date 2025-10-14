// عناصر السلايد
const slides = document.querySelectorAll('.slide');
const section = document.querySelector('.project');
const projectDesc = document.getElementById('project-desc');

let index = 0;

// بيانات المشاريع (الصورة + العنوان + الوصف)
const projects = [
  {
    image: 'img/2.JPG',
    title: 'المشروع الاول ',
    desc: 'مشروع يهدف إلى تطوير السياحة البيئية والحفاظ على الحياة البحرية.'
  },
  {
    image: 'img/21.jpg',
    title: 'التوعية وتوزيع حقائب النظافة بالشراكة مع اليونيسف',
    desc: 'تواجه آلاف الأسر اليوم احتياجات ملحّة للتدخل العاجل، ولا سيما تلك التي تعيش في خيام مخيمات النزوحوفي أنصر، وبتمويل من منظمة اليونيسف، نؤكد التزامنا الثابت بالاستجابة الطارئة خلال هذه الأزمة الإنسانية المؤلمة، وذلك بهدف التخفيف من معاناة الأسر النازحة، وفي الوقت نفسه مكافحة تفشي وباء الكوليرا في عدد من مخيمات النزوح بمحافظة مأرب.'
  },
  {
    image: 'img/22.png',
    title: 'مشروع حفر بئر ارتوازية في مخيم الجفينة',
    desc: 'يواصل فريقنا إنشاء نقاط توزيع المياه في مخيم الجفينة، للتخفيف من معاناة النازحين والمجتمع المضيف في أكبر مخيم للنازحين في اليمن.في أنصر، وبالتعاون مع شركائنا، نلتزم بضمان الحق الإنساني في الحصول على مياه نظيفة.فنحن نؤمن أن الوصول إلى المياه ليس مجرد احتياج أساسي، بل هو بوابة للكرامة الإنسانية، والأمن الغذائي، والتعليم، وتعزيز التماسك الاجتماعي في سياقات النزوح.'
  }
];

// تحديث العرض
function updateProject() {
  // تغيير السلايد
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');

  // تغيير الخلفية
  section.style.backgroundImage = `url(${projects[index].image})`;

  // تحديث الوصف فقط
  projectDesc.textContent = projects[index].desc;
}


// زر التالي
document.querySelector('.next').onclick = () => {
  index = (index + 1) % slides.length;
  updateProject();
}

// زر السابق
document.querySelector('.prev').onclick = () => {
  index = (index - 1 + slides.length) % slides.length;
  updateProject();
}

// تحميل أول مشروع
updateProject();
