const IMAGE_SOURCES_TOP = [
  'src/images/logo-disney.png',
  'src/images/logo-keepsimiling.png',
  'src/images/logo-marvel.png',
  'src/images/logo-lapaulina.png',
  'src/images/logo-glasurit.png',
  'src/images/logo-antina.png',
  'src/images/logo-volkswagen.png',
  'src/images/logo-deli.png',
  'src/images/logo-iff.png',
  'src/images/logo-fifteenpercentpledge.png',
  'src/images/logo-nucete.png',
  'src/images/logo-uuevo.png',
  'src/images/logo-mapaprofessional.png',
  'src/images/logo-hairrecovery.png',
  'src/images/logo-roemmers.png',
  'src/images/logo-energyzone.png',
  'src/images/logo-philips.png',
  'src/images/logo-chandon.png',
  'src/images/logo-NBCUniversal.png',
  'src/images/logo-universalchannel.png',
  'src/images/logo-studiouniversal.png',
  'src/images/logo-syfy.png',
  'src/images/logo-venusconcept.png',
  'src/images/logo-MSC.png',
  'src/images/logo-biotech.png',
  'src/images/logo-clubmed.png',
  'src/images/logo-ternium.png'
];

const IMAGE_SOURCES_BOTTOM = [
  'src/images/logo-masvida.png',
  'src/images/logo-lucasfilms.png',
  'src/images/logo-wenliving.png',
  'src/images/logo-antonello.png',
  'src/images/logo-mom.png',
  'src/images/logo-milena.png',
  'src/images/logo-american.png',
  'src/images/logo-racketcentral.png',
  'src/images/logo-strix.png',
  'src/images/logo-ops.png',
  'src/images/logo-lagauchita.png',
  'src/images/logo-nizza.png',
  'src/images/logo-edding.png',
  'src/images/logo-clorox.png',
  'src/images/logo-sony.png',
  'src/images/logo-mc.png',
  'src/images/logo-vacalin.png',
  'src/images/logo-puma.png',
  'src/images/logo-danone.png',
  'src/images/logo-agco.png',
  'src/images/logo-mcCain.png',
  'src/images/logo-moethennessy.png',
  'src/images/logo-wantti.png',
  'src/images/logo-basf.png',
  'src/images/logo-renault.png',
  'src/images/logo-tacobell.png',
  'src/images/logo-makro.png'
];

const DURATION = 30000; // Duración total de la animación

const createSlider = (imageSources, animationName) => {
  const row = document.createElement('div');
  row.className = 'loop-slider';
  row.style.setProperty('--duration', `${DURATION}ms`);
  row.style.animationName = animationName;

  // Duplicar las imágenes para un efecto de loop infinito
  const images = imageSources.concat(imageSources);
  images.forEach((src) => {
      const img = document.createElement('img');
      img.src = src;
      row.appendChild(img);
  });

  return row;
};

const initializeSliders = () => {
  const sliderContainer = document.getElementById('slider-container');
  const fragment = document.createDocumentFragment();

  const topSlider = createSlider(IMAGE_SOURCES_TOP, 'scroll-left');

  // Para el slider inferior, empezamos desde el último logo y seguimos con el resto
  const bottomSlider = createSlider(IMAGE_SOURCES_BOTTOM, 'scroll-right');

  fragment.appendChild(topSlider);
  fragment.appendChild(bottomSlider);
  
  sliderContainer.appendChild(fragment);
};

initializeSliders();