/* =========================
   STEP 1: MUDRA INFORMATION
   ========================= */
const mudraInfo = {
  "Alapadma": {
    benefits: "Improves heart energy and emotional openness",
    duration: "Hold for 10–15 minutes",
    shloka: "Vikachitapadme pushpe cha vishaye phalarashishu | Gulme tadatitattve cha alapadmaha prayujyate ||",
    shlokaDevanagari: "विकचितापद्मे पुष्पे च विषये फलरशिषु । गुल्मे तदत्तितत्त्वे च अलपद्मह प्रयुज्यते ॥",
    viniyoga: "Full-blown lotus, fruit, circularity, beauty"
  },
  "Arala": {
    benefits: "Stimulates energy flow in the forearms",
    duration: "Hold for 5–10 minutes",
    shloka: "Vishapane amrutapane vate cha balavatkrite | Aralastu karaha proktaha bharatagamavedibhihi ||",
    shlokaDevanagari: "विषपानेऽमृतपाने वाते च बलवत्कृते । अरालस्तु करः प्रोक्तः भरतागमवेदिभिः ॥",
    viniyoga: "Drinking poison, nectar, or violent wind"
  },
  "Ardhachandra": {
    benefits: "Calms the nervous system and aids throat health",
    duration: "Hold for 10 minutes",
    shloka: "Chandre krishnashtamibhage cha galahastarthake tathaa | Bhallayudhe devatanamabhishechanakarmani ||",
    shlokaDevanagari: "चन्द्रे कृष्णाष्टमीभागे च गलहस्तार्थके तथा । भल्लायुधे देवानामामभिषेचनकर्मणि ॥",
    viniyoga: "The moon, a spear, a platter, seizing the throat"
  },
  "Ardhapathaka": {
    benefits: "Enhances mental alertness and focus",
    duration: "Hold for 8–12 minutes",
    shloka: "Pallave phalake teere ubhayorityabhashane | Ardhapathaka ityevam proktaha bharatavedibhihi ||",
    shlokaDevanagari: "पल्लवे फलके तीरे उभयोरित्यभाषणे । अर्धपताक इत्येवं प्रोक्तो भरतवेदिभिः ॥",
    viniyoga: "Leaves, a board/slab, river bank, 'both'"
  },
  "Bhramara": {
    benefits: "Helps in balancing the nervous system",
    duration: "Hold for 5–8 minutes",
    shloka: "Bhramare cha shuke hapse chakravake cha kakarane | Bhramarakhyaha karaha proktaha bharatagamavedibhihi ||",
    shlokaDevanagari: "भ्रमरे च शुके हंसे चक्रवाके च कारणे । भ्रमराख्यः करः प्रोक्तो भरतागमवेदिभिः ॥",
    viniyoga: "A bee, a parrot, a crane"
  },
  "Chandrakala": {
    benefits: "Calms the mind and improves concentration",
    duration: "Hold for 8–10 minutes",
    shloka: "Chandramase mukhakare cha pradeshini krite tathaa | Chandrakaleti vikhyata shastradvaitavidhayini ||",
    shlokaDevanagari: "चन्द्रमसे मुखाकारे च प्रदेशिनी कृते तथा । चन्द्रकलेति विख्याता शास्त्रद्वैतविधायिनी ॥",
    viniyoga: "The crescent moon, the face, index finger extension"
  },
  "Chatura": {
    benefits: "Refines the sense of touch and aesthetic sensitivity",
    duration: "Hold for 5–10 minutes",
    shloka: "Kanchane tamre lohe cha adre shoke rasasvade | Chaturaakhyaha karaha proktaha bharatagamavedibhihi ||",
    shlokaDevanagari: "काञ्चने ताम्रे लोहे च आद्रे शोके रसास्वादे । चतूराख्यः करः प्रोक्तो भरतागमवेदिभिः ॥",
    viniyoga: "Gold, copper, wetness, or sorrow"
  },
  "Hamsapaksha": {
    benefits: "Improves circulation in the palms and fingers",
    duration: "Hold for 10 minutes",
    shloka: "Shatsankhyayam setubandhe nakhalekhanakarmani | Hamsapakshaha karaha proktaha bharatagamavedibhihi ||",
    shlokaDevanagari: "षट्संख्यायां सेतुबन्धे नखलेखनकर्मणि । हंसपक्षः करः प्रोक्तो भरतागमवेदिभिः ॥",
    viniyoga: "The number six, a bridge, scratching with nails"
  },
  "Hamsasya": {
    benefits: "Sharpens the intellect and memory",
    duration: "Hold for 15–20 minutes",
    shloka: "Mangalyasutra bandhe cha upadesha vinishchaye | Hamsasya mudrika prokta dhyanamounadi karmasu ||",
    shlokaDevanagari: "माङ्ग्ल्यसूत्र बन्धे च उपदेश विनिश्चये । हंसास्य मुद्रिका प्रोक्ता ध्यानमौनादि कर्मसु ॥",
    viniyoga: "A swan, instruction, tying the wedding thread"
  },
  "Kangula": {
    benefits: "Aids in digestive fire and metabolic balance",
    duration: "Hold for 5–10 minutes",
    shloka: "Lakuche kiritake chaiva kalhare kanyaka-tathaa | Kangula karaha proktaha bharatagamavedibhihi ||",
    shlokaDevanagari: "लकुचे किरीटके चैव कल्हारे कन्यकातथा । काङ्गुल करः प्रोक्तो भरतागमवेदिभिः ॥",
    viniyoga: "Bell-fruit, a small bell, a young girl"
  },
  "Kapittha": {
    benefits: "Strengthens the grip and wrist stability",
    duration: "Hold for 10 minutes",
    shloka: "Lakshmyam chaiva sarasvatyam veshtane dharane tathaa | Kapittha-khyaha karaha proktaha bharatagamavedibhihi ||",
    shlokaDevanagari: "लक्ष्म्यां चैव सरस्वत्यां वेष्टने धारणे तथा । कपित्थाख्यः करः प्रोक्तो भरतागमवेदिभिः ॥",
    viniyoga: "Goddess Lakshmi, holding flowers, pulling a veil"
  },
  "Kartarimukha": {
    benefits: "Improves coordination between brain hemispheres",
    duration: "Hold for 5–10 minutes",
    shloka: "Streepumsayostu bhede cha viparyasapade tathaa | Kartarimukha ityeva proktaha bharatavedibhihi ||",
    shlokaDevanagari: "स्त्रीपुंसयोस्तु भेदे च विपर्यासपदे तथा । कर्तरीमुख इत्येव प्रोक्तो भरतवेदिभिः ॥",
    viniyoga: "Scissors, separation, opposition"
  },
  "Katakamukha": {
    benefits: "Balances the three doshas (Vata, Pitta, Kapha)",
    duration: "Hold for 10–15 minutes",
    shloka: "Kusumavachaye muktadamni vikasite tathaa | Katakamukha ityeva proktaha bharatavedibhihi ||",
    shlokaDevanagari: "कुसुमावचये मुक्तदाम्नि विकसिते तथा । कटाकामुख इत्येव प्रोक्तो भरतवेदिभिः ॥",
    viniyoga: "Picking flowers, wearing a pearl necklace"
  },
  "Mayura": {
    benefits: "Clears toxins and improves skin health",
    duration: "Hold for 5–8 minutes",
    shloka: "Mayurasyre nade cha vamaney vachane tathaa | Mayurakhyaha karaha proktaha bharatagamavedibhihi ||",
    shlokaDevanagari: "मयूरास्ये नदे च वामने वचने तथा । मयूराख्यः करः प्रोक्तो भरतागमवेदिभिः ॥",
    viniyoga: "Peacock, a creeper, forelock"
  },
  "Mrigashirsha": {
    benefits: "Reduces stress and promotes gentleness",
    duration: "Hold for 10 minutes",
    shloka: "Streenamarthe kapole cha chakre mrigamukhe tathaa | Mrigashirshaha karaha proktaha bharatagamavedibhihi ||",
    shlokaDevanagari: "स्त्रीणामर्थे कपोले च चक्रे मृगमुखे तथा । मृगशीर्षः करः प्रोक्तो भरतागमवेदिभिः ॥",
    viniyoga: "A deer, women, cheeks, a wheel"
  },
  "Mukula": {
    benefits: "Focuses energy; healing for specific organs",
    duration: "Hold for 10–15 minutes",
    shloka: "Kumude chaiva pancha-banasya dharane | Mukulaha karaha proktaha bharatagamavedibhihi ||",
    shlokaDevanagari: "कुमुदे चैव पञ्चबाणस्य धारणे । मुकुलः करः प्रोक्तो भरतागमवेदिभिः ॥",
    viniyoga: "A flower bud, eating, the god of love"
  },
  "Mushti": {
    benefits: "Increases determination and physical strength",
    duration: "Hold for 5 minutes",
    shloka: "Stheerye kachagrahe chaiva yuddhe chaiva niyuddhe | Mushtihyaha karaha proktaha bharatagamavedibhihi ||",
    shlokaDevanagari: "स्थैर्ये कचाग्रहे चैव युद्धे चैव नियुद्धे । मुष्टिह्यः करः प्रोक्तो भरतागमवेदिभिः ॥",
    viniyoga: "Grasping hair, fighting, strength/steadfastness"
  },
  "Padmakosha": {
    benefits: "Enhances the ability to receive and store energy",
    duration: "Hold for 8–10 minutes",
    shloka: "Phale bilvakapitthabhyam stree-stane chaiva yujyate | Padmakoshaha karaha proktaha bharatagamavedibhihi ||",
    shlokaDevanagari: "फले बिल्वकपित्थाभ्यां स्त्रीस्तने चैव युज्यते । पद्मकोषः करः प्रोक्तो भरतागमवेदिभिः ॥",
    viniyoga: "Fruit, circular movement, a cluster of flowers"
  },
  "Pathaka": {
    benefits: "Promotes overall peace and confidence",
    duration: "Hold for 15 minutes",
    shloka: "Natyarambhe varivaha dharane gaganetale | Pathakahyaha karaha proktaha bharatagamavedibhihi ||",
    shlokaDevanagari: "नाट्यारम्भे वारिवाह धारणे गगनतले । पताकाह्यः करः प्रोक्तो भरतागमवेदिभिः ॥",
    viniyoga: "Beginning of dance, clouds, forest, forbidden"
  },
  "Samdamsha": {
    benefits: "Improves fine motor skills and patience",
    duration: "Hold for 5–10 minutes",
    shloka: "Pancha-sankhyayam bhede cha dharane darshane tathaa | Samdamsha karaha proktaha bharatagamavedibhihi ||",
    shlokaDevanagari: "पञ्चसंख्यायां भेदे च धारणे दर्शने तथा । संदंश करः प्रोक्तो भरतागमवेदिभिः ॥",
    viniyoga: "Number five, grasping, an offering"
  },
  "Sarpashirsha": {
    benefits: "Enhances the flow of Prana (vital life force)",
    duration: "Hold for 10 minutes",
    shloka: "Chandane bhujage mandre prokshane poshane tathaa | Sarpashirshaha karaha proktaha bharatagamavedibhihi ||",
    shlokaDevanagari: "चन्दने भुजगे मन्द्रे प्रोक्षणे पोषणे तथा । सर्पशीर्षः करः प्रोक्तो भरतागमवेदिभिः ॥",
    viniyoga: "Sandalwood paste, snake, sprinkling water"
  },
  "Shikhara": {
    benefits: "Boosts self-confidence and removes hesitation",
    duration: "Hold for 10–15 minutes",
    shloka: "Manmadhe karmuke mushtau shaktimantre cha yujyate | Shikharakhyaha karaha proktaha bharatagamavedibhihi ||",
    shlokaDevanagari: "मन्मथे कार्मुके मुष्टौ शक्तिमन्त्रे च युज्यते । शिखराख्यः करः प्रोक्तो भरतागमवेदिभिः ॥",
    viniyoga: "Cupid, a bow, a pillar, saying 'no'"
  },
  "Shukatunda": {
    benefits: "Helps in releasing pent-up frustration",
    duration: "Hold for 5–8 minutes",
    shloka: "Banaprayoge kunte cha rahasyabhashane tathaa | Shukatundaha karaha proktaha bharatagamavedibhihi ||",
    shlokaDevanagari: "बाणप्रयोगे कुन्ते च रहस्यभाषणे तथा । शुकतुण्डः करः प्रोक्तो भरतागमवेदिभिः ॥",
    viniyoga: "Shooting an arrow, a violent spear, a secret"
  },
  "Simhamukha": {
    benefits: "Improves vocal clarity and courage",
    duration: "Hold for 5 minutes",
    shloka: "Homaprayoge gaje cha darbhalamane tathaa | Simhamukhaha karaha proktaha bharatagamavedibhihi ||",
    shlokaDevanagari: "होमप्रयोगे गजे च दर्भलामने तथा । सिंहमुखः करः प्रोक्तो भरतागमवेदिभिः ॥",
    viniyoga: "Homa (fire sacrifice), an elephant, a lion's face"
  },
  "Suchi": {
    benefits: "Improves vision and precision of thought",
    duration: "Hold for 5–10 minutes",
    shloka: "Ekarthe chaiva lokarthe vachane shukane tathaa | Suchyakhyaha karaha proktaha bharatagamavedibhihi ||",
    shlokaDevanagari: "एकार्थे चैव लोकार्थे वचने शुकने तथा । सूच्याख्यः करः प्रोक्तो भरतागमवेदिभिः ॥",
    viniyoga: "The number one, the world, pointing"
  },
  "Tamrachuda": {
    benefits: "Energizes the body and improves stamina",
    duration: "Hold for 10 minutes",
    shloka: "Kukkute bakule chaiva kake lekhanakarmani | Tamrachudaha karaha proktaha bharatagamavedibhihi ||",
    shlokaDevanagari: "कुक्कुटे बकुले चैव काके लेखनकर्मणि । ताम्रचूडः करः प्रोक्तो भरतागमवेदिभिः ॥",
    viniyoga: "A cock, a crane, writing"
  },
  "Tripathaka": {
    benefits: "Centers the mind and helps grounding",
    duration: "Hold for 10–15 minutes",
    shloka: "Makute vrukshabhave cha vajre tadvatdharantare | Tripathakaha karaha proktaha bharatagamavedibhihi ||",
    shlokaDevanagari: "मकुटे वृक्षभावे च वज्रे तद्वद्धरान्तरे । त्रिपताकः करः प्रोक्तो भरतागमवेदिभिः ॥",
    viniyoga: "A crown, a tree, a thunderbolt, fire"
  },
  "Trishula": {
    benefits: "Balances Ida, Pingala, and Sushumna channels",
    duration: "Hold for 5–10 minutes",
    shloka: "Bilvapatre tritve cha trishula-khyaha karaha smritaha |",
    shlokaDevanagari: "बिल्वपत्रे त्रित्वे च त्रिशूलाख्यः करः स्मृतः ।",
    viniyoga: "Trident, Bilva leaf, the number three"
  }
};



window.addEventListener("click", () => {
  const audio = document.getElementById("bgSound");
  if (audio && audio.paused) {
    audio.volume = 0.1; // soft background
    audio.volume = 0;
audio.play();

let v = 0;
const fade = setInterval(() => {
  if (v < 0.25) {
    v += 0.02;
    audio.volume = v;
  } else {
    clearInterval(fade);
  }
}, 200);

  }
}, { once: true });


/* =========================
   VIDEO + CANVAS
   ========================= */

const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 480;
canvas.height = 360;

/* =========================
   MEDIAPIPE HANDS
   ========================= */

const hands = new Hands({
  locateFile: (file) =>
    `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`
});

hands.setOptions({
  maxNumHands: 1,
  modelComplexity: 1,
  minDetectionConfidence: 0.7,
  minTrackingConfidence: 0.7
});

/* =========================
   LANDMARK → ARRAY
   ========================= */

function landmarksToArray(landmarks) {
  let arr = [];
  for (let i = 0; i < landmarks.length; i++) {
    arr.push(
      landmarks[i].x,
      landmarks[i].y,
      landmarks[i].z
    );
  }
  return arr;
}

/* =========================
   BACKEND PREDICTION
   ========================= */

async function predictMudra(inputArray) {
  const response = await fetch("http://127.0.0.1:8000/predict", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ landmarks: inputArray })
  });
  return await response.json();
}

/* =========================
   STABILIZATION SETTINGS
   ========================= */

let predictionBuffer = [];
const BUFFER_SIZE = 10;

let lastCall = 0;
const CALL_INTERVAL = 200; // ms (5 calls/sec)

/* =========================
   MAIN LOOP
   ========================= */

hands.onResults((results) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(results.image, 0, 0, canvas.width, canvas.height);

  if (
    results.multiHandLandmarks &&
    results.multiHandLandmarks.length > 0
  ) {
    const landmarks = results.multiHandLandmarks[0];

    // draw red dots
    for (const lm of landmarks) {
      ctx.beginPath();
      ctx.arc(
        lm.x * canvas.width,
        lm.y * canvas.height,
        5,
        0,
        2 * Math.PI
      );
      ctx.fillStyle = "red";
      ctx.fill();
    }

    const inputArray = landmarksToArray(landmarks);

    const now = Date.now();
    if (now - lastCall > CALL_INTERVAL) {
      lastCall = now;

      predictMudra(inputArray).then(result => {

        // confidence threshold
        if (result.confidence < 0.85) {
          document.getElementById("mudra").innerText = "Hold steady…";
          return;
        }

        // store prediction
        predictionBuffer.push(result.mudra);
        if (predictionBuffer.length > BUFFER_SIZE) {
          predictionBuffer.shift();
        }

        // majority vote
        const counts = {};
        predictionBuffer.forEach(m => {
          counts[m] = (counts[m] || 0) + 1;
        });

        let stableMudra = null;
        let maxCount = 0;
        for (const m in counts) {
          if (counts[m] > maxCount) {
            stableMudra = m;
            maxCount = counts[m];
          }
        }
        
        if (maxCount >= 6) {
          document.getElementById("mudra").innerText =
            stableMudra + " (" + (result.confidence * 100).toFixed(1) + "%)";

          document.getElementById("benefits").innerText =
            "Benefits: " + (mudraInfo[stableMudra]?.benefits || "");

          document.getElementById("duration").innerText =
            "Duration: " + (mudraInfo[stableMudra]?.duration || "");

          document.getElementById("viniyoga").innerText =
            "Hasta Viniyoga: " + (mudraInfo[stableMudra]?.viniyoga || "");

          document.getElementById("shloka").innerText =
            "Sanskrit Shloka: " + (mudraInfo[stableMudra]?.shloka || "");  
          
          document.getElementById("shlokaDevanagari").innerText =
            "Shloka: " + (mudraInfo[stableMudra]?.shlokaDevanagari || "");

        }
      });
    }
  }
});

/* =========================
   START CAMERA
   ========================= */

const camera = new Camera(video, {
  onFrame: async () => {
    await hands.send({ image: video });
  },
  width: 480,
  height: 360
});


camera.start();

