// ══ CHECKLIST DATA ══
const STEPS = {
  buy:[
    {step:"PHASE A",label:"Filtre d'Abstention & Biais Daily/H4 (Avant séance)",items:[
      {key:"b1",text:"<strong>1. Calendrier Forex Factory (NY EST)</strong> — Hors journée NFP (Londres vendredi NFP interdit), hors PM FOMC/taux (14h NY), hors lendemain whipsaw FOMC, hors matinée Bond Auction, hors Bank Holiday US / veille férié, hors multiples news High/Medium Londres, élections incertaines et Seek & Destroy juil–août."},
      {key:"b2",text:"<strong>2. Filtre Session Londres & Jours Semaine</strong> — Veille ≤ 2× ADR 5j et pas de 3 clôtures Daily haussières consécutives (sinon éviter achat Londres). Lundi = prudence ; Mardi (77 % creux hebdo) & Mercredi = optimaux ; Jeudi = attention retournement NY/LC ; Vendredi = abstention si cible Daily atteinte jeudi."},
      {key:"b3",text:"<strong>3. Obligations, Rendements & Multi-Actifs</strong> — ZB/ZN en hausse depuis un Discount Daily/H4/H2 + rendements US10Y en baisse (ou divergence haussière Triade 5Y/10Y/30Y en H4/H2 ou 08h00–08h30 NY). Pas d'obligations en range étroit, pas de ZN + DXY in tandem, pas de découplage (< 3/4 classes)."},
      {key:"b4",text:"<strong>4. Structure Daily/H4, IPDA 20j & Ouverture Hebdo</strong> — Daily (socle obligatoire) et/ou H4 orientés à la hausse après réaction sur un PD Array Discount des 20 derniers jours (40/60j si épuisés), chemin fluide (LRLR) vers Premium opposé, aucun Bearish Breaker Daily bloquant, cohérent avec Dimanche / Lundi 00:00 NY Open."}
    ]},
    {step:"PHASE B",label:"Cadrage Intraday, Liquidité & Projections (H4 → H1/M30/M15)",items:[
      {key:"b5",text:"<strong>5. Amplitude Libre (Daytrade vs Scalp)</strong> — Espace d'au moins 50 à 60 pips libres jusqu'au PD Array Premium Daily/H4 ou ERL opposé pour un Daytrade. Si espace < 40 pips → basculer exclusivement en mode Scalp (R:R 1:1) ou s'abstenir."},
      {key:"b6",text:"<strong>6. Cartographie Complète Liquidités & Ranges</strong> — PDH/PDL, 3 derniers jours H/L, Previous Week/Month H/L, plage NY veille, High/Low Londres & range « Extrême Londres → pré-NY » tracés. CBDR < 40 pips (20–30 idéal), Asian 20–30 pips (≤ 20 pré-Francfort), sans London Sloppiness (20h NY). -1/-2 SD & +2 SD, Flout (< 50 %), 4 niveaux (Filling the Numbers), ADR 5j, niveaux 00/20/50/80 & 30/70 et arrondi 0/5 (spread inclus)."}
    ]},
    {step:"PHASE C",label:"Timing de Séance, Manipulation & Continuation NY (Killzones)",items:[
      {key:"b7",text:"<strong>7. Fenêtre Horaire & Filtre ADR New York</strong> — Exécution dans London Open (01:00–05:00 NY, sweet spot 02:00–04:00 NY) ou NY Open (07:00–10:00 NY, autour de 08:20 CME & 08:30 NY news), uniquement si Londres n'a pas déjà consommé ≥ 80 % de l'ADR 5j. JAMAIS d'entrée avant la publication d'une annonce."},
      {key:"b8",text:"<strong>8. Normal vs Delayed Protraction vs Continuation NY</strong> — Londres Normal : baisse sous 00:00 NY Open + Judas Swing sous Asian Low (-5 pips min, spread inclus ; garde-fou Mois 12 : ne jamais acheter au-dessus de l'Asian High). Londres Delayed : si hausse directe après 00:00 NY, 1er retracement à/après 02:00 NY dans Bullish OB M15/M5. NY Continuation : retest Asian High ou plage Londres→pré-NY après 08:20 NY sans Premium H4 touché (prudence si creux balayé 2× sans protraction)."}
    ]},
    {step:"PHASE D",label:"Signal Micro H1/M30/M15 → M5, SMT & Déclencheur",items:[
      {key:"b9",text:"<strong>9. Purge SSL / Structure M15–M5</strong> — Prise des Sell Stops (Asian Low -5 pips min spread inclus, PDL, creux 3 derniers jours, creux NY veille ou creux intraday M5) suivie d'une cassure haussière / déplacement net sur M15 ou M5 (JAMAIS descendre en M1)."},
      {key:"b10",text:"<strong>10. Hiérarchie PD Array, Williams %R (10) & Vitesse M15</strong> — FVG/OB le plus net (H1/M30/M15) → 1er array Discount actif depuis 50 % (Bullish Breaker prioritaire, Liquidity Void / FVG + OTE 62–79 %, Bullish/Propulsion OB, Rejection Block). Confluence Williams %R (10 sur M15) confirmant un sentiment court terme au plus baissier au contact du Discount Array. Réaction haussière immédiate exigée sur M15 (stagnation = abstention)."},
      {key:"b11",text:"<strong>11. Confirmation SMT Haussière (4 cas exacts)</strong> — 1) DXY Higher High (Turtle Soup vendeur) + GBP/USD Higher Low ; 2) GBP/USD balaie un creux (Turtle Soup acheteur) + DXY Lower High ; 3) GBP/USD Higher Low + EUR/USD Lower Low (EUR/GBP baissier) ; 4) Triade Obligataire 5Y/10Y/30Y à 08:00–08:30 NY : une maturité casse un creux tandis qu'une autre forme un Higher Low."}
    ]},
    {step:"PHASE E",label:"Risque & Plan de Sortie Actif",items:[
      {key:"b12",text:"<strong>12. Taille, Stop Exact, Breakeven (40–50 % Range) & Sorties</strong> — Risque ≤ 1 % (0,5–1 % Scalp), max 2 setups/jour. SL calibré (30 / 40 / 10 pips, 30 pips 2e retour Turtle Soup, Asian Low - 50 % ADR 5j, 100 % ADR 5j à 00:00 GMT, ou option structurelle Mois 12 sous le Discount Array suivant H1/M15). PAS de BE avant 40–50 % du range du jour. Partiels : +20–30 pips, 2 SD, 50 % H1, PDH + 5–15 pips, Previous Week/Month High, Fib 127/168/100 % (ou 127/162 % ADR), 05h/07h/10h–11h NY, et 60–80 % à 10–15 pips avant ADR 5j (80 % si avant 10h NY). Fin 12h–15h NY."}
    ]}
  ],
  sell:[
    {step:"PHASE A",label:"Filtre d'Abstention & Biais Daily/H4 (Avant séance)",items:[
      {key:"s1",text:"<strong>1. Calendrier Forex Factory (NY EST)</strong> — Hors journée NFP (Londres vendredi NFP interdit), hors PM FOMC/taux (14h NY), hors lendemain whipsaw FOMC, hors matinée Bond Auction, hors Bank Holiday US / veille férié, hors multiples news High/Medium Londres, élections incertaines et Seek & Destroy juil–août."},
      {key:"s2",text:"<strong>2. Filtre Session Londres & Jours Semaine</strong> — Veille ≤ 2× ADR 5j et pas de 3 clôtures Daily baissières consécutives (sinon éviter vente Londres). Lundi = prudence ; Mardi (70 % sommet hebdo) & Mercredi = optimaux ; Jeudi = attention retournement NY/LC ; Vendredi = abstention si cible Daily atteinte jeudi."},
      {key:"s3",text:"<strong>3. Obligations, Rendements & Multi-Actifs</strong> — ZB/ZN en baisse depuis un Premium Daily/H4/H2 + rendements US10Y en hausse (ou divergence baissière Triade 5Y/10Y/30Y en H4/H2 ou 08h00–08h30 NY). Pas d'obligations en range étroit, pas de ZN + DXY in tandem, pas de découplage (< 3/4 classes)."},
      {key:"s4",text:"<strong>4. Structure Daily/H4, IPDA 20j & Ouverture Hebdo</strong> — Daily (socle obligatoire) et/ou H4 orientés à la baisse après rejet d'un PD Array Premium des 20 derniers jours (40/60j si épuisés), chemin fluide (LRLR) vers Discount opposé, aucun Bullish Breaker Daily bloquant, cohérent avec Dimanche / Lundi 00:00 NY Open."}
    ]},
    {step:"PHASE B",label:"Cadrage Intraday, Liquidité & Projections (H4 → H1/M30/M15)",items:[
      {key:"s5",text:"<strong>5. Amplitude Libre (Daytrade vs Scalp)</strong> — Espace d'au moins 50 à 60 pips libres jusqu'au PD Array Discount Daily/H4 ou ERL opposé pour un Daytrade. Si espace < 40 pips → basculer exclusivement en mode Scalp (R:R 1:1) ou s'abstenir."},
      {key:"s6",text:"<strong>6. Cartographie Complète Liquidités & Ranges</strong> — PDH/PDL, 3 derniers jours H/L, Previous Week/Month H/L, plage NY veille, High/Low Londres & range « Extrême Londres → pré-NY » tracés. CBDR < 40 pips (20–30 idéal), Asian 20–30 pips (≤ 20 pré-Francfort), sans London Sloppiness (20h NY). +1/+2 SD & -2 SD, Flout (> 50 %), 4 niveaux (Filling the Numbers), ADR 5j, niveaux 00/20/50/80 & 30/70 et arrondi 0/5 (spread inclus)."}
    ]},
    {step:"PHASE C",label:"Timing de Séance, Manipulation & Continuation NY (Killzones)",items:[
      {key:"s7",text:"<strong>7. Fenêtre Horaire & Filtre ADR New York</strong> — Exécution dans London Open (01:00–05:00 NY, sweet spot 02:00–04:00 NY) ou NY Open (07:00–10:00 NY, autour de 08:20 CME & 08:30 NY news), uniquement si Londres n'a pas déjà consommé ≥ 80 % de l'ADR 5j. JAMAIS d'entrée avant la publication d'une annonce."},
      {key:"s8",text:"<strong>8. Normal vs Delayed Protraction vs Continuation NY</strong> — Londres Normal : hausse au-dessus de 00:00 NY Open + Judas Swing au-dessus Asian High (+5 pips min, spread inclus ; garde-fou Mois 12 : ne jamais vendre sous l'Asian Low). Londres Delayed : si chute directe après 00:00 NY, 1er retracement à/après 02:00 NY dans Bearish OB M15/M5. NY Continuation : retest Asian Low ou plage Londres→pré-NY après 08:20 NY sans Discount H4 touché (prudence si sommet balayé 2× sans protraction)."}
    ]},
    {step:"PHASE D",label:"Signal Micro H1/M30/M15 → M5, SMT & Déclencheur",items:[
      {key:"s9",text:"<strong>9. Purge BSL / Structure M15–M5</strong> — Prise des Buy Stops (Asian High +5 pips min spread inclus, PDH, sommet 3 derniers jours, sommet NY veille ou sommet intraday M5) suivie d'une cassure baissière / déplacement net sur M15 ou M5 (JAMAIS descendre en M1)."},
      {key:"s10",text:"<strong>10. Hiérarchie PD Array, Williams %R (10) & Vitesse M15</strong> — FVG/OB le plus net (H1/M30/M15) → 1er array Premium actif depuis 50 % (Bearish Breaker prioritaire, Liquidity Void / FVG + OTE 62–79 %, Bearish/Propulsion OB, Rejection Block). Confluence Williams %R (10 sur M15) confirmant un sentiment court terme au plus haussier au contact du Premium Array. Chute immédiate exigée sur M15 (stagnation = abstention)."},
      {key:"s11",text:"<strong>11. Confirmation SMT Baissière (4 cas exacts)</strong> — 1) DXY Higher Low + GBP/USD Higher High (Turtle Soup vendeur) ; 2) DXY Lower Low (Turtle Soup acheteur DXY) + GBP/USD Lower High ; 3) GBP/USD Lower High + EUR/USD Higher High (EUR/GBP haussier) ; 4) Triade Obligataire 5Y/10Y/30Y à 08:00–08:30 NY : une maturité casse un sommet tandis qu'une autre forme un Lower High."}
    ]},
    {step:"PHASE E",label:"Risque & Plan de Sortie Actif",items:[
      {key:"s12",text:"<strong>12. Taille, Stop Exact, Breakeven (40–50 % Range) & Sorties</strong> — Risque ≤ 1 % (0,5–1 % Scalp), max 2 setups/jour. SL calibré (30 / 40 / 10 pips, 30 pips 2e retour Turtle Soup, Asian High + 50 % ADR 5j, 100 % ADR 5j à 00:00 GMT, ou option structurelle Mois 12 au-dessus du Premium Array suivant H1/M15). PAS de BE avant 40–50 % du range du jour. Partiels : +20–30 pips, -2 SD, 50 % H1, PDL - 5–15 pips, Previous Week/Month Low, Fib 127/168/100 % (ou 127/162 % ADR), 05h/07h/10h–11h NY, et 60–80 % à 10–15 pips avant ADR 5j (80 % si avant 10h NY). Fin 12h–15h NY."}
    ]}
  ]
};

let currentBias=null,checkStates={},entries=[],pendingFiles=[];

// ══ INIT ══
document.addEventListener('DOMContentLoaded',()=>{
  updateDate();
  loadTheme();
  loadEntries();
  loadStats();
  checkAutoReset();
  restoreSessionState();
  updateMacroSynthese();
  startKillzoneTimer();
  initSaisonBanner();
});

function updateDate(){
  const now=new Date();
  const days=['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'];
  const months=['Jan','Fév','Mar','Avr','Mai','Jun','Jul','Aoû','Sep','Oct','Nov','Déc'];
  document.getElementById('date-display').textContent=`${days[now.getDay()]} ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;
  const d=document.getElementById('j-date');
  if(d)d.value=now.toISOString().slice(0,10);
  const t=document.getElementById('j-time');
  if(t){const hh=String(now.getHours()).padStart(2,'0');const mm=String(now.getMinutes()).padStart(2,'0');t.value=`${hh}:${mm}`;}
}

// ══ PERSISTANCE DES CASES ══
function saveSessionState(){
  const today=new Date().toISOString().slice(0,10);
  localStorage.setItem('mw-session',JSON.stringify({
    date:today,
    bias:currentBias,
    checkStates,
    macroStates:getMacroStates()
  }));
}

function getMacroStates(){
  const states={};
  document.querySelectorAll('.check-item[data-macro]').forEach(el=>{
    states[el.dataset.macro]=el.classList.contains('checked');
  });
  return states;
}

function restoreSessionState(){
  try{
    const saved=JSON.parse(localStorage.getItem('mw-session')||'null');
    const today=new Date().toISOString().slice(0,10);
    if(!saved||saved.date!==today)return; // jour différent → pas de restauration
    // Restaurer biais
    if(saved.bias){
      currentBias=saved.bias;
      checkStates=saved.checkStates||{};
      document.querySelectorAll('.bias-btn').forEach(b=>{
        if(b.dataset.bias===saved.bias)b.classList.add('selected');
      });
      renderChecklist(saved.bias);
      // Rétablir les cases cochées
      Object.keys(checkStates).forEach(key=>{
        const el=document.querySelector(`.check-item[data-key="${key}"]`);
        if(el)el.classList.add('checked');
      });
      updateProb();
      updateStepRings();
    }
    // Restaurer les cases macro (tous onglets)
    if(saved.macroStates){
      Object.entries(saved.macroStates).forEach(([key,val])=>{
        const el=document.querySelector(`.check-item[data-macro="${key}"]`);
        if(el&&val)el.classList.add('checked');
      });
    }
  }catch(e){}
}

// ══ PAS D'AUTO-RESET — Reset manuel uniquement ══
function checkAutoReset(){
  // Rien : tout persiste jusqu'au reset manuel
}

// ══ SYNTHÈSE MACRO ══
function updateMacroSynthese(){
  const buyItems=document.querySelectorAll('.check-item[data-side="buy"]');
  const sellItems=document.querySelectorAll('.check-item[data-side="sell"]');
  const buyCount=[...buyItems].filter(el=>el.classList.contains('checked')).length;
  const sellCount=[...sellItems].filter(el=>el.classList.contains('checked')).length;
  const total=buyItems.length; // 7 de chaque
  const box=document.getElementById('macro-synthese');
  if(!box)return;
  if(buyCount===0&&sellCount===0){
    box.innerHTML='<div class="synthese-box neutral"><div class="synthese-icon">🔍</div><div><div class="synthese-title">EN ATTENTE D\'ANALYSE</div><div class="synthese-sub">Cochez les éléments macro Buy ou Sell pour obtenir la synthèse automatique.</div></div></div>';
    return;
  }
  const buyPct=Math.round((buyCount/total)*100);
  const sellPct=Math.round((sellCount/total)*100);
  let cls,icon,title,sub;
  if(buyCount>sellCount&&buyPct>=60){
    cls='buy-wins';icon='📈';title='BIAIS BUY PROGRAM CONFIRMÉ';
    sub=`${buyCount}/${total} signaux haussiers alignés. Concentrez-vous sur les setups Buy dans le Plan du Jour.`;
  } else if(sellCount>buyCount&&sellPct>=60){
    cls='sell-wins';icon='📉';title='BIAIS SELL PROGRAM CONFIRMÉ';
    sub=`${sellCount}/${total} signaux baissiers alignés. Concentrez-vous sur les setups Sell dans le Plan du Jour.`;
  } else if(buyCount>sellCount){
    cls='buy-wins';icon='📈';title='BIAIS BUY PROGRAM — PARTIEL';
    sub=`${buyCount}/${total} signaux haussiers. Prudence — continuez à valider les éléments restants.`;
  } else if(sellCount>buyCount){
    cls='sell-wins';icon='📉';title='BIAIS SELL PROGRAM — PARTIEL';
    sub=`${sellCount}/${total} signaux baissiers. Prudence — continuez à valider les éléments restants.`;
  } else {
    cls='neutral';icon='⚖️';title='BIAIS INDÉTERMINÉ';
    sub='Autant de signaux Buy que Sell. Le marché est en consolidation ou en transition — évitez d\'entrer.';
  }
  box.innerHTML=`<div class="synthese-box ${cls}">
    <div class="synthese-icon">${icon}</div>
    <div style="flex:1">
      <div class="synthese-title">${title}</div>
      <div class="synthese-sub">${sub}</div>
      <div class="synthese-scores" style="align-items:center;flex-wrap:wrap;">
        <span class="synthese-score score-buy">📈 Buy : ${buyCount}/${total}</span>
        <span class="synthese-score score-sell">📉 Sell : ${sellCount}/${total}</span>
        ${buyCount!==sellCount?`<button class="btn-sm" style="background:var(--gold);color:var(--bg);border:none;font-weight:700;margin-left:auto;" onclick="applyMacroBias('${buyCount>sellCount?'buy':'sell'}')">⚡ Activer ${buyCount>sellCount?'BUY':'SELL'} dans Plan du Jour →</button>`:''}
      </div>
    </div>
  </div>`;
  saveSessionState();
}

function resetPlan(){
  const btn=document.getElementById('btn-reset-plan');
  // Premier clic : demander confirmation visuellement
  if(btn.dataset.confirm!=='yes'){
    btn.textContent='⚠️ Confirmer la réinitialisation ?';
    btn.style.borderColor='var(--sell)';
    btn.style.color='var(--sell)';
    btn.dataset.confirm='yes';
    setTimeout(()=>{
      btn.textContent='↺ Réinitialiser la session';
      btn.style.borderColor='';btn.style.color='';
      btn.dataset.confirm='';
    },3000);
    return;
  }
  // Deuxième clic : exécuter
  btn.textContent='↺ Réinitialiser la session';
  btn.style.borderColor='';btn.style.color='';
  btn.dataset.confirm='';
  currentBias=null;checkStates={};
  localStorage.removeItem('mw-session');localStorage.removeItem('mw-abst');document.querySelectorAll('.abst-item').forEach(el=>el.classList.remove('triggered'));updateAbstentionStatus();
  document.querySelectorAll('.bias-btn').forEach(b=>b.classList.remove('selected'));
  document.querySelectorAll('.check-item[data-macro]').forEach(el=>el.classList.remove('checked'));
  document.getElementById('checklist-container').innerHTML='<div style="text-align:center;padding:40px;color:var(--text-dim);font-size:13px;">↑ Sélectionnez Buy ou Sell pour afficher la checklist</div>';
  document.getElementById('verdict').className='verdict';
  document.getElementById('prob-fill').style.width='0%';
  document.getElementById('prob-pct').textContent='0%';
  document.getElementById('prob-checked').textContent='0 / 0 critères';
  document.getElementById('prob-verdict-label').textContent='Sélectionnez un biais';
  showToast('Session réinitialisée ↺');
}

// ══ KILLZONE TIMER ══
// Heure NY = UTC - 5h (EST) ou UTC - 4h (EDT)
// On affiche l'heure NY en direct + on indique la killzone active

const KZ_SLOTS=[
  {id:'asia',name:'Asia / 00:00 GMT',start:18,end:21,cls:'off'},
  {id:'london',name:'London Open',start:1,end:5,cls:'london'},
  {id:'ny',name:'New York Open',start:7,end:10,cls:'ny'},
  {id:'lc',name:'London Close',start:10,end:12,cls:'lc'}
];

function getNYOffset(){
  // DST US : 2e dim. mars → 1er dim. novembre = EDT (UTC-4), sinon EST (UTC-5)
  const now=new Date();
  const y=now.getUTCFullYear();
  const mar=new Date(Date.UTC(y,2,1));
  const dstStart=new Date(Date.UTC(y,2,8+(7-mar.getUTCDay())%7,7)); // 2h locale = 7h UTC en EST
  const nov=new Date(Date.UTC(y,10,1));
  const dstEnd=new Date(Date.UTC(y,10,1+(7-nov.getUTCDay())%7,6)); // 2h locale = 6h UTC en EDT
  return(now>=dstStart&&now<dstEnd)?-4:-5;
}

function getNYTime(){
  const now=new Date();
  const offset=getNYOffset();
  const nyMs=now.getTime()+(offset*3600000);
  const ny=new Date(nyMs);
  return{
    h:ny.getUTCHours(),
    m:ny.getUTCMinutes(),
    s:ny.getUTCSeconds(),
    hourDecimal:ny.getUTCHours()+(ny.getUTCMinutes()/60)+(ny.getUTCSeconds()/3600),
    offset
  };
}

function startKillzoneTimer(){
  updateKillzone();
  setInterval(updateKillzone,1000);
}

function updateKillzone(){
  const{h,m,s,hourDecimal,offset}=getNYTime();
  const timeStr=pad(h)+':'+pad(m)+':'+pad(s);
  const ampm=h<12?'AM':'PM';
  const h12=h%12||12;

  const kzName=document.getElementById('kz-name');
  const kzStatus=document.getElementById('kz-status');
  const kzCountdown=document.getElementById('kz-countdown');
  const kzBadge=document.getElementById('kz-header-badge');
  const kzHeaderText=document.getElementById('kz-header-text');

  // Afficher l'heure NY en direct dans le countdown
  kzCountdown.textContent=pad(h12)+':'+pad(m)+':'+pad(s)+' '+ampm;

  // Trouver killzone active
  let activeKZ=null;
  for(const kz of KZ_SLOTS){
    if(hourDecimal>=kz.start&&hourDecimal<kz.end){activeKZ=kz;break;}
  }

  // Highlight slots
  KZ_SLOTS.forEach(kz=>{
    const el=document.getElementById('slot-'+kz.id);
    if(el)el.classList.toggle('current',activeKZ&&activeKZ.id===kz.id);
  });

  if(activeKZ){
    // Dans une killzone — afficher temps restant
    const secLeft=(activeKZ.end-hourDecimal)*3600;
    const rh=Math.floor(secLeft/3600);
    const rm=Math.floor((secLeft%3600)/60);
    const rs=Math.floor(secLeft%60);
    kzName.textContent=activeKZ.name+' 🔴';
    kzName.className='kz-name '+activeKZ.cls;
    kzStatus.innerHTML='Heure NY : <strong>'+timeStr+' (UTC'+offset+')</strong> — Ferme dans '+pad(rh)+'h '+pad(rm)+'m '+pad(rs)+'s';
    kzBadge.className='kz-badge active-'+activeKZ.id;
    kzHeaderText.textContent=activeKZ.name;
  } else {
    // Hors killzone — afficher prochaine
    let nextKZ=null,minDiff=99999;
    for(const kz of KZ_SLOTS){
      let diff=kz.start-hourDecimal;
      if(diff<0)diff+=24;
      if(diff<minDiff){minDiff=diff;nextKZ=kz;}
    }
    const secNext=minDiff*3600;
    const nh=Math.floor(secNext/3600);
    const nm=Math.floor((secNext%3600)/60);
    const ns=Math.floor(secNext%60);
    kzName.textContent='Hors Killzone';
    kzName.className='kz-name off';
    kzStatus.innerHTML='Heure NY : <strong>'+timeStr+' (UTC'+offset+')</strong> — '+nextKZ.name+' dans '+pad(nh)+'h '+pad(nm)+'m '+pad(ns)+'s';
    kzBadge.className='kz-badge inactive';
    kzHeaderText.textContent='Hors KZ';
  }
}

function pad(n){return String(Math.floor(n)).padStart(2,'0')}

// ══ THEME ══
function loadTheme(){const t=localStorage.getItem('mw-theme')||'dark';document.documentElement.setAttribute('data-theme',t);}
document.getElementById('theme-toggle').addEventListener('click',()=>{
  const cur=document.documentElement.getAttribute('data-theme');
  const next=cur==='dark'?'light':'dark';
  document.documentElement.setAttribute('data-theme',next);
  localStorage.setItem('mw-theme',next);
});

// ══ NAV ══
document.querySelectorAll('.nav-tab').forEach(tab=>{
  tab.addEventListener('click',()=>{
    document.querySelectorAll('.nav-tab').forEach(t=>t.classList.remove('active'));
    document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('view-'+tab.dataset.view).classList.add('active');
    if(tab.dataset.view==='stats'){loadStats();}
  });
});

// ══ BIAS ══
document.querySelectorAll('.bias-btn').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const bias=btn.dataset.bias;
    if(currentBias===bias)return;
    // Si un biais était déjà actif, demander confirmation avant d'écraser
    if(currentBias){
      const other=bias==='buy'?'Sell':'Buy';
      // Sauvegarder les states actuels avant de switcher
      const savedStates={...checkStates};
      currentBias=bias;checkStates={};
      document.querySelectorAll('.bias-btn').forEach(b=>b.classList.remove('selected'));
      btn.classList.add('selected');
      renderChecklist(bias);updateProb();
      saveSessionState();
      showToast('Biais changé → '+bias.toUpperCase()+' Program');
    } else {
      currentBias=bias;checkStates={};
      document.querySelectorAll('.bias-btn').forEach(b=>b.classList.remove('selected'));
      btn.classList.add('selected');
      renderChecklist(bias);updateProb();
      saveSessionState();
    }
  });
});

function splitDescriptionIntoLines(desc){
  if(!desc) return [];
  let text = desc.trim();

  if(/(?:^|\s|;)1\)\s/.test(text) && /(?:^|\s|;)2\)\s/.test(text)){
    const parts = text.split(/\s*;?\s*(?=\d+\)\s)/).map(s => s.replace(/;+\s*$/, '').trim()).filter(Boolean);
    if(parts.length > 1) return parts;
  }

  const protectedText = text
    .replace(/(\d)\.(\d)/g, '$1__DEC__$2')
    .replace(/\b(ex|etc|vs|cf|env|max|min|approx|fig)\./gi, '$1__ABBR__')
    .replace(/\.\.\./g, '__ELLIPSIS__');

  let rawLines = protectedText
    .split(/(?:\.\s+(?=[A-ZÀ-ÖØ-Þ0-9(«"])|\s+;\s+)/)
    .map(s => s
      .replace(/__DEC__/g, '.')
      .replace(/__ABBR__/g, '.')
      .replace(/__ELLIPSIS__/g, '...')
      .trim()
    )
    .filter(Boolean);

  rawLines = rawLines.map(line => /[.!?…]$/.test(line) ? line : line + '.');
  return rawLines;
}

function renderLinesHTML(desc){
  const lines = splitDescriptionIntoLines(desc);
  if(lines.length === 0) return '';
  return `<ul class="check-lines-list">
    ${lines.map(line => {
      const numMatch = line.match(/^(\d+\))\s*(.*)$/);
      if(numMatch){
        return `<li class="check-line-row">
          <span class="check-line-num">${numMatch[1]}</span>
          <span class="check-line-text">${numMatch[2]}</span>
        </li>`;
      }
      return `<li class="check-line-row">
        <span class="check-line-bullet">•</span>
        <span class="check-line-text">${line}</span>
      </li>`;
    }).join('')}
  </ul>`;
}

function formatChecklistItemHTML(rawText){
  const match = rawText.match(/^<strong>(\d+\.\s*)([^<]+)<\/strong>\s*[—-]\s*(.*)$/s);
  if(match){
    return `<div class="check-content">
      <div class="check-header-line">
        <span class="check-num-badge">ÉTAPE ${match[1].replace('.','').trim()}</span>
        <span class="check-title-main">${match[2].trim()}</span>
      </div>
      ${renderLinesHTML(match[3].trim())}
    </div>`;
  }
  return `<div class="check-content">${renderLinesHTML(rawText)}</div>`;
}

function renderChecklist(bias){
  const container=document.getElementById('checklist-container');
  const pills=document.getElementById('phase-pills');if(pills)pills.style.display='flex';
  container.innerHTML=STEPS[bias].map((step, idx)=>`
    <div class="phase-block" data-phase="${step.step}" style="animation-delay:${idx*0.09}s">
      <div class="card">
        <div class="phase-card-header" onclick="togglePhaseCollapse(this)">
          <span class="phase-badge-pill">${step.step}</span>
          <div class="card-label" style="font-weight:600;font-size:14px;">${step.label}</div>
          <span style="font-size:11px;color:var(--text-muted);" id="phase-count-${step.step.replace(' ','')}">0/${step.items.length}</span>
          <svg class="progress-ring" viewBox="0 0 36 36">
            <circle class="track" cx="18" cy="18" r="15" stroke-dasharray="94.25" stroke-dashoffset="0"/>
            <circle class="fill ring-fill-${step.step.replace(' ','')}" cx="18" cy="18" r="15" stroke-dasharray="94.25" stroke-dashoffset="94.25"/>
          </svg>
          <span class="phase-chevron">▾</span>
        </div>
        <div class="phase-items-wrap">
          ${step.items.map(item=>`
            <div class="check-item" data-key="${item.key}" onclick="toggleCheck(this)">
              <div class="check-box"></div>
              ${formatChecklistItemHTML(item.text)}
            </div>`).join('')}
        </div>
      </div>
    </div>`).join('');
  updateStepRings();
}

function togglePhaseCollapse(headerEl){
  const block = headerEl.closest('.phase-block');
  if(block) block.classList.toggle('collapsed');
}

function toggleZenFocus(){
  document.body.classList.toggle('zen-focus-mode');
  const btn = document.getElementById('btn-zen-focus');
  const active = document.body.classList.contains('zen-focus-mode');
  if(btn){
    btn.classList.toggle('active', active);
    btn.innerHTML = active ? '👁️ Tout afficher' : '🧘 Mode Focus (Masquer cochés)';
  }
  showToast(active ? 'Mode Focus activé — critères restants uniquement' : 'Tous les critères affichés');
}

function toggleCheck(el){
  const key=el.dataset.key;
  checkStates[key]?delete checkStates[key]:(checkStates[key]=true);
  el.classList.toggle('checked');
  updateProb();updateStepRings();
  saveSessionState();
}
function toggleMacro(el){
  el.classList.toggle('checked');
  saveSessionState();
}

function updateProb(){
  if(!currentBias)return;
  const allItems=STEPS[currentBias].flatMap(s=>s.items);
  const total=allItems.length;
  const checked=allItems.filter(i=>checkStates[i.key]).length;
  const pct=total?Math.round((checked/total)*100):0;
  document.getElementById('prob-fill').style.width=pct+'%';
  document.getElementById('prob-pct').textContent=pct+'%';
  document.getElementById('prob-checked').textContent=`${checked} / ${total} critères`;
  const verdict=document.getElementById('verdict');
  const icon=document.getElementById('verdict-icon');
  const title=document.getElementById('verdict-title');
  const body=document.getElementById('verdict-body');
  const label=document.getElementById('prob-verdict-label');
  verdict.className='verdict show';
  if(pct>=85){verdict.classList.add('go');icon.textContent='🟢';title.textContent='SETUP VALIDE — EXECUTION AUTORISÉE';body.textContent='Toutes les conditions critiques sont alignées. Le setup est à haute probabilité. Respect strict du risk management.';label.textContent='Haute probabilité';}
  else if(pct>=65){verdict.classList.add('caution');icon.textContent='🟡';title.textContent='ATTENTION — PRUDENCE REQUISE';body.textContent='Plusieurs critères manquent. Revalidez la structure macro et le timing de killzone avant d\'entrer.';label.textContent='Probabilité moyenne';}
  else{verdict.classList.add('wait');icon.textContent='🔴';title.textContent='NO SETUP — PRÉSERVEZ VOTRE CAPITAL';body.textContent='Conditions insuffisantes. Conformément à la règle d\'or ICT : attendez ou passez à la session suivante.';label.textContent='Probabilité faible';}
}

function updateStepRings(){
  if(!currentBias)return;
  STEPS[currentBias].forEach(step=>{
    const keyId = step.step.replace(' ','');
    const checked=step.items.filter(i=>checkStates[i.key]).length;
    const total=step.items.length;
    const offset=94.25-(checked/total)*94.25;
    document.querySelectorAll('.ring-fill-'+keyId).forEach(el=>{
      el.style.strokeDashoffset=offset;
      el.style.stroke = (checked===total) ? 'var(--buy)' : 'var(--gold)';
    });
    const cntEl = document.getElementById('phase-count-'+keyId);
    if(cntEl){
      cntEl.textContent = checked===total ? '✓ Validé' : `${checked}/${total}`;
      cntEl.style.color = checked===total ? 'var(--buy)' : 'var(--text-muted)';
      cntEl.style.fontWeight = checked===total ? '700' : '500';
    }
  });
}

// ══ RISK CALCULATOR — Complet avec Mitigation ══
function applySLPreset(){
  const presetEl=document.getElementById('calc-sl-preset');
  const slEl=document.getElementById('calc-sl');
  const adrEl=document.getElementById('calc-adr-pips');
  if(!presetEl||!slEl)return;
  const val=presetEl.value;
  if(!val)return;
  const adr=parseFloat(adrEl?.value)||0;
  if(val==='30'||val==='30_ts'){
    slEl.value=30;
  }else if(val==='40'){
    slEl.value=40;
  }else if(val==='10'){
    slEl.value=10;
  }else if(val==='50_adr'){
    if(adr>0){slEl.value=Math.round(adr*0.5);}
    else{showToast('Renseignez l\'ADR 5j (pips) pour calculer 50% ADR');return;}
  }else if(val==='100_adr'){
    if(adr>0){slEl.value=Math.round(adr);}
    else{showToast('Renseignez l\'ADR 5j (pips) pour calculer 100% ADR');return;}
  }
  calcRisk();
}

function calcRisk(){
  const capital=parseFloat(document.getElementById('calc-capital').value);
  const riskPct=parseFloat(document.getElementById('calc-risk').value);
  const sl=parseFloat(document.getElementById('calc-sl').value);
  const baseFactor=parseFloat(document.getElementById('calc-base-mode')?.value||'0.3');
  const baseLbl=document.getElementById('res-base-lbl');
  if(baseLbl)baseLbl.textContent=baseFactor===0.3?'Base Active (30%)':'Base Active (100%)';
  if(!capital||!sl)return;

  const isScalp=riskPct<=0.5;
  const baseCapital=capital*baseFactor;
  const riskAmount=baseCapital*(riskPct/100);
  // Formule exacte ICT : $/pip = (Capital × Risque%) ÷ SL pips
  const pipValue=riskAmount/sl; // $ par pip
  const lots=pipValue/10; // 1 lot standard (1.00) = 10$/pip sur EUR/USD & GBP/USD (0.10 mini = 1$/pip)
  const rr3=riskAmount*3;

  // Protocole mitigation : risque réduit de 50% après perte
  const mitigatedRisk=riskPct/2;
  const mitigatedAmount=baseCapital*(mitigatedRisk/100);
  const mitigatedLots=mitigatedAmount/(sl*10);

  // Alerte mode selon espace disponible
  const espace=parseFloat(document.getElementById('calc-espace').value)||0;
  const alert=document.getElementById('calc-mode-alert');
  if(espace>0){
    alert.style.display='block';
    if(espace>=50){
      alert.style.background='rgba(46,204,113,0.1)';
      alert.style.border='1px solid rgba(46,204,113,0.3)';
      alert.style.color='var(--buy)';
      alert.textContent='✅ DAYTRADE — '+espace+' pips disponibles. Espace suffisant (≥ 50 pips).';
    } else if(espace>=40){
      alert.style.background='var(--gold-glow)';
      alert.style.border='1px solid var(--gold-border)';
      alert.style.color='var(--gold)';
      alert.textContent='⚠️ LIMITE — '+espace+' pips. Minimum absolu atteint (40 pips). Réduire le SL ou basculer en Scalp.';
    } else {
      alert.style.background='rgba(231,76,60,0.08)';
      alert.style.border='1px solid rgba(231,76,60,0.3)';
      alert.style.color='var(--sell)';
      alert.textContent='⚡ SCALP UNIQUEMENT — '+espace+' pips. Espace insuffisant pour un Daytrade (< 40 pips).';
    }
  } else {
    alert.style.display='none';
  }

  document.getElementById('res-amount').textContent='$'+riskAmount.toFixed(2);
  document.getElementById('res-lots').textContent=lots.toFixed(2)+' lots';
  document.getElementById('res-base').textContent='$'+baseCapital.toFixed(0);

  // Résultats étendus
  const ext=document.getElementById('res-extended');
  if(ext){
    ext.innerHTML=`
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:12px;padding-top:12px;border-top:1px solid var(--bg-elevated);">
        <div style="background:var(--bg-elevated);border-radius:5px;padding:10px;text-align:center;">
          <div style="font-size:10px;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.06em;margin-bottom:4px;">$/pip</div>
          <div style="font-family:'Cinzel',serif;font-size:15px;color:var(--gold);">$${pipValue.toFixed(2)}</div>
        </div>
        <div style="background:var(--bg-elevated);border-radius:5px;padding:10px;text-align:center;">
          <div style="font-size:10px;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.06em;margin-bottom:4px;">Mode</div>
          <div style="font-family:'Cinzel',serif;font-size:13px;color:${isScalp?'var(--gold)':'var(--buy)'};">${isScalp?'⚡ SCALP':'📊 DAYTRADE'}</div>
        </div>
        <div style="background:rgba(46,204,113,0.08);border:1px solid rgba(46,204,113,0.2);border-radius:5px;padding:10px;text-align:center;">
          <div style="font-size:10px;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.06em;margin-bottom:4px;">TP1 (R:R 1:1)</div>
          <div style="font-family:'Cinzel',serif;font-size:15px;color:var(--buy);">+$${riskAmount.toFixed(2)}</div>
        </div>
        <div style="background:rgba(46,204,113,0.08);border:1px solid rgba(46,204,113,0.2);border-radius:5px;padding:10px;text-align:center;">
          <div style="font-size:10px;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.06em;margin-bottom:4px;">TP2 (R:R 3:1)</div>
          <div style="font-family:'Cinzel',serif;font-size:15px;color:var(--buy);">+$${rr3.toFixed(2)}</div>
        </div>
      </div>
      <div style="margin-top:10px;padding:12px;background:rgba(231,76,60,0.07);border:1px solid rgba(231,76,60,0.2);border-radius:6px;">
        <div style="font-size:10px;font-weight:700;color:var(--sell);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:6px;">⚡ Protocole Mitigation — Après perte</div>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;text-align:center;">
          <div>
            <div style="font-size:10px;color:var(--text-dim);">Risque réduit</div>
            <div style="font-family:'Cinzel',serif;font-size:14px;color:var(--gold);">${mitigatedRisk}%</div>
          </div>
          <div>
            <div style="font-size:10px;color:var(--text-dim);">$ risqué</div>
            <div style="font-family:'Cinzel',serif;font-size:14px;color:var(--gold);">$${mitigatedAmount.toFixed(2)}</div>
          </div>
          <div>
            <div style="font-size:10px;color:var(--text-dim);">Lots</div>
            <div style="font-family:'Cinzel',serif;font-size:14px;color:var(--gold);">${mitigatedLots.toFixed(2)}</div>
          </div>
        </div>
        <div style="font-size:11px;color:var(--text-muted);margin-top:8px;">Un gain de <strong style="color:var(--buy);">2R</strong> sur ce trade réduit efface 100% de la perte précédente.</div>
      </div>
      ${buildPriceLevelsCard(sl)}
      <div style="margin-top:10px;text-align:right;">
        <button class="btn-sm" style="background:var(--gold);color:var(--bg);border:none;font-weight:700;" onclick="sendCalcToJournal()">📥 Pré-remplir le Journal avec ces niveaux</button>
      </div>`;
  }
}

// ══ JOURNAL ══
function loadEntries(){
  try{entries=JSON.parse(localStorage.getItem('mw-entries')||'[]');}catch(e){entries=[];}
  renderJournal();
}
function saveEntries(){localStorage.setItem('mw-entries',JSON.stringify(entries));}

function renderJournal(){
  const list=document.getElementById('journal-list');
  if(!entries.length){list.innerHTML='<div style="text-align:center;padding:60px 20px;color:var(--text-dim);font-size:13px;"><div style="font-size:32px;margin-bottom:12px;">📋</div>Aucune session enregistrée.</div>';return;}
  const sorted=[...entries].sort((a,b)=>b.date.localeCompare(a.date));
  list.innerHTML=sorted.map(e=>{
    const biasTag=e.bias==='buy'?'<span class="tag-buy">📈 Buy</span>':e.bias==='sell'?'<span class="tag-sell">📉 Sell</span>':'';
    const setupTag=e.setup==='yes'?'<span class="tag-buy">Setup ✓</span>':e.setup==='no'?'<span class="tag-no">No Setup</span>':'<span class="tag-no">Partiel</span>';
    const kzLabels={london:'London',ny:'NY Open','london-close':'London Close'};
    const kzTag=e.kz?`<span class="tag-kz">🕐 ${kzLabels[e.kz]||e.kz}</span>`:'';
    const assetTag=e.asset?`<span style="background:var(--gold-glow);color:var(--gold);padding:2px 8px;border-radius:20px;font-size:10px;font-weight:700;border:1px solid var(--gold-border);">${e.asset}</span>`:'';
    const timeTag=e.time?`<span style="color:var(--text-dim);font-size:10px;">⏰ ${e.time}</span>`:'';
    const pnl=parseFloat(e.pnl);
    const pnlColor=pnl>0?'var(--buy)':pnl<0?'var(--sell)':'var(--text-muted)';
    const levels=(e.entry||e.sl||e.tp1)?`
      <div class="journal-levels">
        ${e.entry?`<div class="level-item"><div class="level-label">Entrée</div><div class="level-val">${e.entry}</div></div>`:''}
        ${e.sl?`<div class="level-item"><div class="level-label">Stop Loss</div><div class="level-val" style="color:var(--sell)">${e.sl}</div></div>`:''}
        ${e.tp1?`<div class="level-item"><div class="level-label">TP1</div><div class="level-val" style="color:var(--buy)">${e.tp1}</div></div>`:''}
        ${e.pnl!==''&&e.pnl!==undefined?`<div class="level-item"><div class="level-label">P&L</div><div class="level-val" style="color:${pnlColor}">${pnl>0?'+':''}${e.pnl} pips</div></div>`:''}
      </div>`:'';
    const tagsHtml=e.checkedTags&&e.checkedTags.length?`
      <div style="margin-top:12px;padding-top:10px;border-top:1px solid var(--bg-elevated);">
        <div style="font-size:10px;color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:8px;">✅ Cases validées ce jour</div>
        <div style="display:flex;flex-wrap:wrap;gap:5px;">${e.checkedTags.map(t=>`<span class="journal-auto-tag checked">${t}</span>`).join('')}</div>
      </div>`:'';
    const screenshotsHtml=e.screenshots&&e.screenshots.length?`<div class="screenshots-grid">${e.screenshots.map(s=>`<img class="screenshot-thumb" src="${s}" onclick="openImg('${s}')">`).join('')}</div>`:'';
    return`<div class="journal-day">
      <div class="journal-day-header" onclick="toggleDay(this)">
        <div class="journal-day-date">${formatDate(e.date)}</div>
        <div class="journal-day-meta">${assetTag}${biasTag}${setupTag}${kzTag}${timeTag}${e.pnl!==''&&e.pnl!==undefined&&!e.entry?`<span style="color:${pnlColor};font-weight:600;">${pnl>0?'+':''}${e.pnl} pips</span>`:''}<span>▾</span></div>
      </div>
      <div class="journal-day-body">
        ${e.prob?`<div class="journal-detail">Probabilité checklist : <span>${e.prob}%</span></div>`:''}
        ${e.dd?`<div class="journal-detail">Drawdown : <span>${e.dd}%</span></div>`:''}
        ${levels}
        ${tagsHtml}
        ${e.notes?`<div class="journal-detail" style="border-top:1px solid var(--bg-elevated);padding-top:10px;margin-top:6px;">${e.notes}</div>`:''}
        ${screenshotsHtml}
        <div class="journal-actions">
          <button class="btn-sm btn-delete" onclick="deleteEntry(${e.id})">🗑 Supprimer</button>
          <button class="btn-sm btn-export-entry" onclick="exportEntryPDF(${e.id})">📄 Exporter PDF</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

function toggleDay(h){h.nextElementSibling.classList.toggle('open');}
function formatDate(str){
  const d=new Date(str+'T12:00:00');
  const days=['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'];
  const months=['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];
  return`${days[d.getDay()]} ${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

function deleteEntry(id){
  const btn=document.querySelector(`[onclick="deleteEntry(${id})"]`);
  if(btn&&btn.dataset.confirm!=='yes'){
    btn.textContent='⚠️ Confirmer ?';
    btn.style.borderColor='var(--sell)';btn.style.color='var(--sell)';
    btn.dataset.confirm='yes';
    setTimeout(()=>{if(btn){btn.textContent='🗑 Supprimer';btn.style.borderColor='';btn.style.color='';btn.dataset.confirm='';}},3000);
    return;
  }
  entries=entries.filter(e=>e.id!==id);
  saveEntries();renderJournal();loadStats();showToast('Session supprimée');
}

// ══ MODAL ══
document.getElementById('btn-add-entry').addEventListener('click',openModal);

function openModal(){
  updateDate();
  pendingFiles=[];
  document.getElementById('file-preview').innerHTML='';

  // Auto-remplir le biais depuis le Plan du Jour
  if(currentBias){
    document.getElementById('j-bias').value=currentBias;
  }

  // Auto-remplir la probabilité
  if(currentBias){
    const allItems=STEPS[currentBias].flatMap(s=>s.items);
    const total=allItems.length;
    const checked=allItems.filter(i=>checkStates[i.key]).length;
    const pct=total?Math.round((checked/total)*100):0;
    document.getElementById('j-prob').value=pct;
  }

  // Auto-remplir la killzone active
  const{hourDecimal}=getNYTime();
  for(const kz of KZ_SLOTS){
    if(hourDecimal>=kz.start&&hourDecimal<kz.end){
      const kzMap={london:'london',ny:'ny',lc:'london-close'};
      document.getElementById('j-kz').value=kzMap[kz.id]||'';
      break;
    }
  }

  // Générer les tags des cases cochées
  buildAutoTags();

  document.getElementById('modal-overlay').classList.add('open');
}

function buildAutoTags(){
  const container=document.getElementById('j-auto-tags');
  if(!container)return;
  container.innerHTML='';
  const tags=[];

  // Cases Plan du Jour (checklist)
  if(currentBias){
    STEPS[currentBias].forEach(step=>{
      step.items.forEach(item=>{
        if(checkStates[item.key]){
          const label=item.text.replace(/<[^>]+>/g,'').split('—')[0].trim();
          tags.push({label,checked:true});
        }
      });
    });
  }

  // Cases Macro
  document.querySelectorAll('.check-item[data-macro]').forEach(el=>{
    if(el.classList.contains('checked')){
      const txt=el.querySelector('.check-text');
      if(txt){
        const label=txt.innerText.split('—')[0].trim().substring(0,30);
        tags.push({label,checked:true});
      }
    }
  });

  // Cases Risk
  document.querySelectorAll('.check-item[data-macro^="r-"]').forEach(el=>{
    if(el.classList.contains('checked')){
      const txt=el.querySelector('.check-text');
      if(txt){
        const label=txt.innerText.split('—')[0].trim().substring(0,30);
        tags.push({label,checked:true});
      }
    }
  });

  if(tags.length===0){
    container.innerHTML='<span style="font-size:11px;color:var(--text-dim);">Aucune case cochée — cochez les cases dans les autres onglets d\'abord</span>';
    return;
  }

  // Dédoublonner
  const seen=new Set();
  tags.forEach(t=>{
    if(seen.has(t.label))return;
    seen.add(t.label);
    const span=document.createElement('span');
    span.className='journal-auto-tag checked';
    span.textContent='✓ '+t.label;
    container.appendChild(span);
  });
}

function closeModal(){document.getElementById('modal-overlay').classList.remove('open');}
document.getElementById('modal-overlay').addEventListener('click',e=>{if(e.target===document.getElementById('modal-overlay'))closeModal();});

function previewFiles(e){
  Array.from(e.target.files).forEach(file=>{
    const r=new FileReader();
    r.onload=ev=>{
      pendingFiles.push(ev.target.result);
      const img=document.createElement('img');
      img.src=ev.target.result;
      img.style.cssText='width:70px;height:55px;object-fit:cover;border-radius:4px;border:1px solid var(--gold-border)';
      document.getElementById('file-preview').appendChild(img);
    };
    r.readAsDataURL(file);
  });
}

function saveEntry(){
  const date=document.getElementById('j-date').value;
  if(!date){showToast('Ajoutez une date');return;}

  // Collecter les tags cochés
  const checkedTags=[];
  document.querySelectorAll('#j-auto-tags .journal-auto-tag.checked').forEach(el=>{
    checkedTags.push(el.textContent.replace('✓ ',''));
  });

  const entry={
    id:Date.now(),date,
    time:document.getElementById('j-time').value,
    bias:document.getElementById('j-bias').value,
    asset:document.getElementById('j-asset').value,
    setup:document.getElementById('j-setup').value,
    kz:document.getElementById('j-kz').value,
    prob:document.getElementById('j-prob').value,
    entry:document.getElementById('j-entry').value,
    sl:document.getElementById('j-sl').value,
    tp1:document.getElementById('j-tp1').value,
    pnl:document.getElementById('j-pnl').value,
    dd:document.getElementById('j-dd').value,
    notes:document.getElementById('j-notes').value,
    checkedTags,
    screenshots:[...pendingFiles]
  };
  entries.push(entry);saveEntries();closeModal();renderJournal();loadStats();
  showToast('Session enregistrée ✓');
  ['j-kz','j-entry','j-sl','j-tp1','j-pnl','j-dd','j-notes'].forEach(id=>{document.getElementById(id).value='';});
  document.getElementById('j-setup').value='no';
  pendingFiles=[];document.getElementById('file-preview').innerHTML='';
}

// ══ STATS & WEEKLY SUMMARY ══
function loadStats(){
  const total=entries.length;
  const trades=entries.filter(e=>e.setup==='yes').length;
  const noSetup=entries.filter(e=>e.setup==='no').length;
  const buys=entries.filter(e=>e.bias==='buy').length;
  const sells=entries.filter(e=>e.bias==='sell').length;
  const probs=entries.filter(e=>e.prob).map(e=>parseFloat(e.prob));
  const avgProb=probs.length?Math.round(probs.reduce((a,b)=>a+b,0)/probs.length):0;
  const screenshots=entries.reduce((n,e)=>n+(e.screenshots?e.screenshots.length:0),0);
  document.getElementById('stat-entries').textContent=total||'0';
  document.getElementById('stat-trades').textContent=trades||'0';
  document.getElementById('stat-no-setup').textContent=noSetup||'0';
  document.getElementById('stat-buy-pct').textContent=total?Math.round(buys/total*100)+'%':'—';
  document.getElementById('stat-avg-prob').textContent=avgProb?avgProb+'%':'—';
  document.getElementById('stat-screenshots').textContent=screenshots||'0';
  if(buys+sells>0){const bp=Math.round(buys/(buys+sells)*100);document.getElementById('bias-bar-buy').style.width=bp+'%';document.getElementById('bias-buy-label').textContent=`Buy: ${bp}%`;document.getElementById('bias-sell-label').textContent=`Sell: ${100-bp}%`;}
  // Streak
  const streak=document.getElementById('streak-row');streak.innerHTML='';
  const today=new Date();
  for(let i=29;i>=0;i--){
    const d=new Date(today);d.setDate(d.getDate()-i);
    const day=d.toISOString().slice(0,10);
    const done=entries.some(e=>e.date===day);
    const isToday=i===0;
    const dot=document.createElement('div');
    dot.className='streak-dot'+(done?' done':'')+(isToday&&!done?' today':'');
    dot.title=day;dot.textContent=done?'✓':isToday?'●':'';
    streak.appendChild(dot);
  }
  renderWeeklySummary();
}

function getWeekBounds(offset=0){
  const now=new Date();
  const day=now.getDay();
  const diffMon=day===0?-6:1-day;
  const mon=new Date(now);mon.setDate(now.getDate()+diffMon+(offset*7));mon.setHours(0,0,0,0);
  const sun=new Date(mon);sun.setDate(mon.getDate()+6);sun.setHours(23,59,59,999);
  return{start:mon.toISOString().slice(0,10),end:sun.toISOString().slice(0,10),mon,sun};
}

function renderWeeklySummary(){
  const container=document.getElementById('weekly-summary-container');
  const weeks=[];
  for(let w=0;w>=- 3;w--){
    const bounds=getWeekBounds(w);
    const wEntries=entries.filter(e=>e.date>=bounds.start&&e.date<=bounds.end);
    if(wEntries.length>0||w===0)weeks.push({bounds,entries:wEntries});
  }
  if(!weeks.length){container.innerHTML='<div style="text-align:center;padding:30px;color:var(--text-dim);font-size:12px;">Aucune donnée hebdomadaire.</div>';return;}
  container.innerHTML=weeks.map(w=>{
    const we=w.entries;
    const trades=we.filter(e=>e.setup==='yes').length;
    const noSetup=we.filter(e=>e.setup==='no').length;
    const totalPips=we.filter(e=>e.pnl!=='').reduce((s,e)=>s+parseFloat(e.pnl||0),0);
    const probs=we.filter(e=>e.prob).map(e=>parseFloat(e.prob));
    const avgP=probs.length?Math.round(probs.reduce((a,b)=>a+b,0)/probs.length):0;
    const disciplineScore=we.length>0?Math.round((we.length/5)*100):0;
    const pnlColor=totalPips>0?'var(--buy)':totalPips<0?'var(--sell)':'var(--text-muted)';
    const label=w.bounds.start===getWeekBounds(0).start?'Semaine en cours':'Semaine du '+w.bounds.start;
    return`<div class="weekly-card">
      <div class="weekly-header">
        <div class="weekly-title">${label}</div>
        <div class="weekly-score" style="color:${disciplineScore>=80?'var(--buy)':disciplineScore>=50?'var(--gold)':'var(--sell)'};">${disciplineScore}%</div>
      </div>
      <div class="weekly-row"><span class="weekly-key">Sessions enregistrées</span><span class="weekly-val">${we.length}</span></div>
      <div class="weekly-row"><span class="weekly-key">Trades pris</span><span class="weekly-val">${trades}</span></div>
      <div class="weekly-row"><span class="weekly-key">No-Setup (discipline)</span><span class="weekly-val">${noSetup}</span></div>
      <div class="weekly-row"><span class="weekly-key">P&L total</span><span class="weekly-val" style="color:${pnlColor}">${totalPips>0?'+':''}${totalPips} pips</span></div>
      <div class="weekly-row"><span class="weekly-key">Probabilité moyenne</span><span class="weekly-val">${avgP?avgP+'%':'—'}</span></div>
      <div class="weekly-row"><span class="weekly-key">Score de discipline</span><span class="weekly-val" style="color:${disciplineScore>=80?'var(--buy)':disciplineScore>=50?'var(--gold)':'var(--sell)'}">${disciplineScore}% (${we.length}/5 jours)</span></div>
    </div>`;
  }).join('');
}

// ══ EXPORT PDF ══
function exportEntryPDF(id){
  const e=entries.find(x=>x.id===id);if(!e)return;
  const kzLabels={london:'London Open',ny:'New York Open','london-close':'London Close'};
  const win=window.open('','_blank');
  win.document.write(`<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Session ${e.date}</title>
  <style>body{font-family:Georgia,serif;max-width:700px;margin:40px auto;color:#1a1510;background:#fff}
  h1{font-size:18px;color:#9A7230;border-bottom:2px solid #C9A84C;padding-bottom:10px;margin-bottom:20px}
  h2{font-size:13px;color:#9A7230;text-transform:uppercase;letter-spacing:0.1em;margin:20px 0 8px}
  .row{display:flex;justify-content:space-between;padding:7px 0;border-bottom:1px solid #eee;font-size:13px}
  .label{color:#7a7060}.val{font-weight:600}
  .notes{background:#f9f7f4;border-left:3px solid #C9A84C;padding:12px 16px;font-size:13px;line-height:1.7;margin:10px 0}
  img{max-width:100%;border:1px solid #ccc;border-radius:4px;margin:6px 4px}
  .footer{margin-top:40px;font-size:11px;color:#aaa;text-align:center}
  @media print{button{display:none}}</style></head><body>
  <h1>🐺 THE MASTERWOLF ICT PLAN — Session du ${formatDate(e.date)}</h1>
  <div class="row"><span class="label">Date</span><span class="val">${formatDate(e.date)}</span></div>
  ${e.time?`<div class="row"><span class="label">Heure d'entrée</span><span class="val">${e.time}</span></div>`:''}
  <div class="row"><span class="label">Biais</span><span class="val">${e.bias==='buy'?'📈 Buy Program':e.bias==='sell'?'📉 Sell Program':'—'}</span></div>
  <div class="row"><span class="label">Setup</span><span class="val">${e.setup==='yes'?'✅ Setup valide':e.setup==='no'?'🔴 No Setup':'⚠️ Partiel'}</span></div>
  ${e.kz?`<div class="row"><span class="label">Killzone</span><span class="val">${kzLabels[e.kz]||e.kz}</span></div>`:''}
  ${e.prob?`<div class="row"><span class="label">Probabilité checklist</span><span class="val">${e.prob}%</span></div>`:''}
  ${e.entry?`<div class="row"><span class="label">Prix d'entrée</span><span class="val">${e.entry}</span></div>`:''}
  ${e.sl?`<div class="row"><span class="label">Stop Loss</span><span class="val">${e.sl}</span></div>`:''}
  ${e.tp1?`<div class="row"><span class="label">TP1</span><span class="val">${e.tp1}</span></div>`:''}
  ${e.pnl!==''&&e.pnl!==undefined?`<div class="row"><span class="label">P&L</span><span class="val">${e.pnl>0?'+':''}${e.pnl} pips</span></div>`:''}
  ${e.dd?`<div class="row"><span class="label">Drawdown</span><span class="val">${e.dd}%</span></div>`:''}
  ${e.notes?`<h2>Notes</h2><div class="notes">${e.notes}</div>`:''}
  ${e.screenshots&&e.screenshots.length?`<h2>Captures d'écran (${e.screenshots.length})</h2>${e.screenshots.map(s=>`<img src="${s}">`).join('')}`:''}
  <div class="footer">The Masterwolf ICT Plan — Généré le ${new Date().toLocaleDateString('fr-FR')}</div>
  <script>window.print();<\/script></body></html>`);
  win.document.close();
}

function exportWeekPDF(){
  const bounds=getWeekBounds(0);
  const wEntries=entries.filter(e=>e.date>=bounds.start&&e.date<=bounds.end).sort((a,b)=>a.date.localeCompare(b.date));
  const trades=wEntries.filter(e=>e.setup==='yes').length;
  const noSetup=wEntries.filter(e=>e.setup==='no').length;
  const totalPips=wEntries.filter(e=>e.pnl!=='').reduce((s,e)=>s+parseFloat(e.pnl||0),0);
  const probs=wEntries.filter(e=>e.prob).map(e=>parseFloat(e.prob));
  const avgP=probs.length?Math.round(probs.reduce((a,b)=>a+b,0)/probs.length):0;
  const kzLabels={london:'London Open',ny:'New York Open','london-close':'London Close'};
  const win=window.open('','_blank');
  win.document.write(`<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Résumé Semaine ${bounds.start}</title>
  <style>body{font-family:Georgia,serif;max-width:750px;margin:40px auto;color:#1a1510}
  h1{font-size:18px;color:#9A7230;border-bottom:2px solid #C9A84C;padding-bottom:10px}
  h2{font-size:13px;color:#9A7230;text-transform:uppercase;letter-spacing:0.1em;margin:24px 0 8px}
  .summary-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:16px 0}
  .stat-box{border:1px solid #C9A84C;border-radius:6px;padding:14px;text-align:center}
  .stat-num{font-size:22px;font-weight:700;color:#9A7230}
  .stat-label{font-size:10px;color:#7a7060;text-transform:uppercase;letter-spacing:0.06em}
  .day-card{border:1px solid #ddd;border-radius:6px;padding:14px;margin-bottom:12px;page-break-inside:avoid}
  .day-title{font-size:13px;font-weight:700;color:#9A7230;margin-bottom:8px}
  .row{display:flex;justify-content:space-between;font-size:12px;padding:4px 0;border-bottom:1px solid #f0ede6}
  .label{color:#7a7060}.val{font-weight:600}
  .notes{background:#f9f7f4;border-left:3px solid #C9A84C;padding:10px 14px;font-size:12px;line-height:1.7;margin:8px 0}
  img{max-width:120px;height:80px;object-fit:cover;border:1px solid #ccc;border-radius:3px;margin:4px}
  .footer{margin-top:40px;font-size:11px;color:#aaa;text-align:center}
  @media print{button{display:none}}</style></head><body>
  <h1>🐺 THE MASTERWOLF ICT PLAN — Résumé Semaine du ${bounds.start} au ${bounds.end}</h1>
  <div class="summary-grid">
    <div class="stat-box"><div class="stat-num">${wEntries.length}</div><div class="stat-label">Sessions</div></div>
    <div class="stat-box"><div class="stat-num">${trades}</div><div class="stat-label">Trades pris</div></div>
    <div class="stat-box"><div class="stat-num">${noSetup}</div><div class="stat-label">No-Setup</div></div>
    <div class="stat-box"><div class="stat-num">${totalPips>0?'+':''}${totalPips}</div><div class="stat-label">Pips total</div></div>
    <div class="stat-box"><div class="stat-num">${avgP?avgP+'%':'—'}</div><div class="stat-label">Prob. moy.</div></div>
    <div class="stat-box"><div class="stat-num">${wEntries.length>0?Math.round((wEntries.length/5)*100)+'%':'—'}</div><div class="stat-label">Discipline</div></div>
  </div>
  <h2>Détail des sessions</h2>
  ${wEntries.map(e=>`
    <div class="day-card">
      <div class="day-title">${formatDate(e.date)}${e.time?' — '+e.time:''}</div>
      <div class="row"><span class="label">Biais</span><span class="val">${e.bias==='buy'?'📈 Buy':e.bias==='sell'?'📉 Sell':'—'}</span></div>
      <div class="row"><span class="label">Setup</span><span class="val">${e.setup==='yes'?'✅ Valide':e.setup==='no'?'🔴 No Setup':'⚠️ Partiel'}</span></div>
      ${e.kz?`<div class="row"><span class="label">Killzone</span><span class="val">${kzLabels[e.kz]||e.kz}</span></div>`:''}
      ${e.prob?`<div class="row"><span class="label">Probabilité</span><span class="val">${e.prob}%</span></div>`:''}
      ${e.pnl!==''&&e.pnl!==undefined?`<div class="row"><span class="label">P&L</span><span class="val">${e.pnl>0?'+':''}${e.pnl} pips</span></div>`:''}
      ${e.notes?`<div class="notes">${e.notes}</div>`:''}
      ${e.screenshots&&e.screenshots.length?`<div>${e.screenshots.map(s=>`<img src="${s}">`).join('')}</div>`:''}
    </div>`).join('')}
  <div class="footer">The Masterwolf ICT Plan — Généré le ${new Date().toLocaleDateString('fr-FR')}</div>
  <script>window.print();<\/script></body></html>`);
  win.document.close();
}

// ══ IMAGE VIEWER ══
function openImg(src){
  const o=document.createElement('div');
  o.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:999;display:flex;align-items:center;justify-content:center;cursor:pointer;';
  const img=document.createElement('img');
  img.src=src;img.style.cssText='max-width:92vw;max-height:88vh;border-radius:6px;border:1px solid var(--gold-border);';
  o.appendChild(img);o.addEventListener('click',()=>o.remove());
  document.body.appendChild(o);
}

// ══ PD ARRAY MATRIX ══
const PDA_DATA={
  'old-high':{name:'Old High / Old Low',zone:'PREMIUM — Niveau 7 (Sommet)',badges:['<span class="pda-badge b-old">HTF</span>','<span class="pda-badge b-limit">Ordre Limit</span>'],body:`<strong>Définition :</strong> Ancien sommet abritant des <span class="ok">Buy Stops</span>, ou ancien creux cassé redevenu résistance majeure. C'est le niveau le plus élevé du spectre Premium — la cible HTF ultime en Sell Program.<br><br><strong>Intraday :</strong> Surveiller les <span class="warn">equal highs</span> Daily/H4 et les sommets de la semaine précédente. Un balayage de ces niveaux = piège à acheteurs → renversement potentiel.<br><br><strong>Ordre :</strong> <span class="ko">Sell Limit</span> sur ou juste sous l'Old High. SL au-dessus du dernier swing high M5.`},
  'rej-prem':{name:'Rejection Block (Premium)',zone:'PREMIUM — Niveau 6',badges:['<span class="pda-badge b-rej">Mèches Hautes</span>','<span class="pda-badge b-limit">Ordre Limit</span>'],body:`<strong>Définition :</strong> Liquidité logée <span class="ko">juste au-dessus des corps</span> des bougies présentant de longues mèches hautes. Les vendeurs institutionnels ont réagi là mais sans fermer la bougie aux extrêmes.<br><br><strong>Intraday :</strong> Repérer sur M15/M5 les bougies avec de longues mèches hautes dans une zone de Premium HTF. L'objectif est de vendre <span class="warn">sous la mèche</span>, pas obligatoirement à l'extrémité.<br><br><strong>Ordre :</strong> <span class="ko">Sell Limit</span> sur le haut du corps des bougies à mèches. Stop au-dessus de la mèche.`},
  'ob-bear':{name:'Bearish Order Block',zone:'PREMIUM — Niveau 5',badges:['<span class="pda-badge b-ob">Order Block</span>','<span class="pda-badge b-limit">Ordre Limit</span>'],body:`<strong>Définition :</strong> Dernière bougie haussière (<em>up-close candle</em>) — ou série de bougies haussières consécutives — juste avant un mouvement baissier impulsif institutionnel.<br><br><strong>Niveaux clés à tracer :</strong><br>• <span class="warn">Open</span> de la bougie haussière<br>• <span class="warn">Low</span> de la bougie haussière<br>• <span class="warn">Mean Threshold</span> = 50% du corps (niveau d'entrée idéal)<br><br><strong>Intraday :</strong> L'OB M5/M15 dans une zone de Premium Daily/H4 est le setup de vente par excellence. Le prix remonte dans l'OB en retracement → vente sur le Mean Threshold ou l'Open.<br><br><strong>Ordre :</strong> <span class="ko">Sell Limit</span> sur l'Open ou le Mean Threshold. SL au-dessus du High de l'OB.`},
  'fvg-bear':{name:'Bearish Fair Value Gap',zone:'PREMIUM — Niveau 4',badges:['<span class="pda-badge b-fvg">FVG</span>','<span class="pda-badge b-stop">Ordre Stop</span>'],body:`<strong>Définition :</strong> Vide de cotation créé lors d'un déplacement impulsif baissier — le prix n'a été livré que dans un seul sens (vendeur). Espace entre le <em>High de la bougie N-1</em> et le <em>Low de la bougie N+1</em>.<br><br><strong>Intraday :</strong> Le FVG M5/M15 dans une zone de Premium est une cible de retracement. Le prix remonte le combler <span class="warn">(partiellement ou totalement)</span> avant de repartir à la baisse.<br><br><strong>Règle d'or M15 :</strong> Dès que le prix entre dans le FVG, il doit réagir et partir vite. S'il stagne → la probabilité chute.<br><br><strong>Ordre :</strong> <span class="ko">Sell Stop</span> sous le Low du FVG après confirmation de rejet. Ou Limit sur le 50% du FVG.`},
  'void-bear':{name:'Liquidity Void (Bearish)',zone:'PREMIUM — Niveau 3',badges:['<span class="pda-badge b-liq">Void</span>','<span class="pda-badge b-stop">Ordre Stop</span>'],body:`<strong>Définition :</strong> Grand déséquilibre créé par une chute brutale et rapide (livraison uniquement vendeuse). Le prix remonte le combler — c'est une zone de résistance potentielle dans le spectre Premium.<br><br><strong>Différence avec FVG :</strong> Le Void est <span class="warn">beaucoup plus large</span> qu'un FVG — il représente plusieurs bougies d'impulsion sans cotation dans l'autre sens.<br><br><strong>Intraday :</strong> Surveiller le Void sur H1/H4. Quand le prix remonte le remplir depuis un Discount, c'est une cible de prise de profits partielle avant de chercher l'OB ou le FVG plus haut.<br><br><strong>Ordre :</strong> <span class="ko">Sell Stop</span> à l'entrée du Void, ou TP partiel en atteignant sa base.`},
  'brk-bear':{name:'Bearish Breaker',zone:'PREMIUM — Niveau 2 (⚡ PRIORITÉ)',badges:['<span class="pda-badge b-brk">Breaker</span>','<span class="pda-badge b-stop">Ordre Stop</span>'],body:`<strong>Définition :</strong> Bougie baissière située entre deux sommets, où le <span class="warn">second sommet a balayé un ancien sommet</span> (<em>Turtle Soup</em>) avant que le prix ne casse le creux intermédiaire.<br><br><strong>⚡ Règle de priorité absolue :</strong> Dès qu'un Breaker est identifié devant le prix, il <span class="ko">bloque généralement</span> le retour vers le Void, le FVG ou l'OB situés derrière lui. Le Breaker prime sur tous les arrays au-delà de lui.<br><br><strong>Intraday :</strong> Le Breaker M5/M15 en zone Premium est l'un des setups les plus fiables. Après le balayage du BSL et la cassure de structure, le prix reteste le Breaker → vente.<br><br><strong>Ordre :</strong> <span class="ko">Sell Stop</span> sous le Low du Breaker ou <span class="ko">Sell Limit</span> sur le retest de son corps.`},
  'mit-bear':{name:'Bearish Mitigation Block',zone:'PREMIUM — Niveau 1 (Le plus bas en Premium)',badges:['<span class="pda-badge b-mit">Mitigation</span>','<span class="pda-badge b-stop">Ordre Stop</span>'],body:`<strong>Définition :</strong> Petit rebond dans une tendance baissière ou échec de cassure d'un sommet (<em>failure swing</em>). Permet à la Smart Money de <span class="ko">liquider des positions acheteuses piégées</span> et de vendre à nouveau.<br><br><strong>Intraday :</strong> C'est le premier niveau de résistance rencontré dès que le prix monte depuis l'Équilibre. Souvent présent sur M5/M15 après une consolidation courte.<br><br><strong>Ordre :</strong> <span class="ko">Sell Stop</span> sous le creux du rebond baissier raté. SL serré au-dessus du sommet de ce rebond.`},
  'mit-bull':{name:'Bullish Mitigation Block',zone:'DISCOUNT — Niveau 1 (Le plus haut en Discount)',badges:['<span class="pda-badge b-mit">Mitigation</span>','<span class="pda-badge b-stop">Ordre Stop</span>'],body:`<strong>Définition :</strong> Repli haussier avorté où les vendeurs piégés cherchent à sortir avant de poursuivre à la hausse. C'est le premier niveau de support rencontré dès que le prix descend depuis l'Équilibre.<br><br><strong>Intraday :</strong> Présent sur M5/M15 après une courte consolidation baissière. Les vendeurs piégés rachètent → accélération haussière possible.<br><br><strong>Ordre :</strong> <span class="ok">Buy Stop</span> au-dessus du sommet du repli haussier raté. SL serré sous le creux.`},
  'brk-bull':{name:'Bullish Breaker',zone:'DISCOUNT — Niveau 2 (⚡ PRIORITÉ)',badges:['<span class="pda-badge b-brk">Breaker</span>','<span class="pda-badge b-stop">Ordre Stop</span>'],body:`<strong>Définition :</strong> Bougie haussière située entre deux creux, où le <span class="warn">second creux a balayé un ancien creux</span> (chasse aux Sell Stops) avant que le prix ne casse le sommet intermédiaire.<br><br><strong>⚡ Règle de priorité absolue :</strong> Le Bullish Breaker bloque le retour vers le Void, le FVG ou l'OB situés derrière lui. <span class="ok">Il prime sur tous les arrays au-delà.</span><br><br><strong>Intraday :</strong> Après le balayage du SSL et la cassure de structure haussière, le prix reteste le Breaker → achat. C'est l'un des setups Buy les plus fiables sur M5/M15.<br><br><strong>Ordre :</strong> <span class="ok">Buy Stop</span> au-dessus du High du Breaker ou <span class="ok">Buy Limit</span> sur le retest de son corps.`},
  'void-bull':{name:'Liquidity Void (Bullish)',zone:'DISCOUNT — Niveau 3',badges:['<span class="pda-badge b-liq">Void</span>','<span class="pda-badge b-stop">Ordre Stop</span>'],body:`<strong>Définition :</strong> Grande impulsion haussière rapide laissant un vide en dessous (livraison uniquement acheteuse). C'est une zone de support potentielle dans le spectre Discount.<br><br><strong>Intraday :</strong> Quand le prix revient dans le Void depuis un Premium, c'est une zone d'achat potentielle ou un objectif de TP partiel sur un Sell Program. Surveiller sur H1/H4.<br><br><strong>Ordre :</strong> <span class="ok">Buy Stop</span> à l'entrée du Void depuis le haut, ou TP partiel sur le sommet du Void en Sell.`},
  'fvg-bull':{name:'Bullish Fair Value Gap',zone:'DISCOUNT — Niveau 4',badges:['<span class="pda-badge b-fvg">FVG</span>','<span class="pda-badge b-stop">Ordre Stop</span>'],body:`<strong>Définition :</strong> Vide de cotation créé lors d'un déplacement impulsif haussier. Espace entre le <em>High de la bougie N-1</em> et le <em>Low de la bougie N+1</em>. Le prix descend le combler avant de repartir à la hausse.<br><br><strong>Intraday :</strong> Le FVG M5/M15 dans une zone de Discount est une zone d'achat de haute probabilité. Le prix descend dans le FVG, réagit, et repart acheter.<br><br><strong>Règle d'or M15 :</strong> Réaction rapide obligatoire dès que le prix entre dans le FVG. Stagnation = probabilité en chute.<br><br><strong>Ordre :</strong> <span class="ok">Buy Stop</span> au-dessus du High du FVG après confirmation, ou <span class="ok">Buy Limit</span> sur le 50% du FVG.`},
  'ob-bull':{name:'Bullish Order Block',zone:'DISCOUNT — Niveau 5',badges:['<span class="pda-badge b-ob">Order Block</span>','<span class="pda-badge b-limit">Ordre Limit</span>'],body:`<strong>Définition :</strong> Dernière bougie baissière (<em>down-close candle</em>) — ou série de bougies baissières — juste avant une impulsion haussière institutionnelle.<br><br><strong>Niveaux clés à tracer :</strong><br>• <span class="warn">Open</span> de la bougie baissière<br>• <span class="warn">High</span> de la bougie baissière<br>• <span class="warn">Mean Threshold</span> = 50% du corps (entrée idéale OTE)<br><br><strong>Propulsion Block :</strong> Si une bougie baissière reteste l'OB et propulse le prix vers un nouveau sommet → elle devient un <span class="ok">Propulsion Block</span> (confirmation supplémentaire).<br><br><strong>Intraday :</strong> L'OB M5/M15 dans un Discount Daily/H4 est le setup d'achat par excellence. Entrée sur le Mean Threshold ou l'Open.<br><br><strong>Ordre :</strong> <span class="ok">Buy Limit</span> sur l'Open ou le Mean Threshold. SL sous le Low de l'OB.`},
  'rej-disc':{name:'Rejection Block (Discount)',zone:'DISCOUNT — Niveau 6',badges:['<span class="pda-badge b-rej">Mèches Basses</span>','<span class="pda-badge b-limit">Ordre Limit</span>'],body:`<strong>Définition :</strong> Liquidité reposant <span class="ok">juste en dessous des corps</span> des bougies présentant de longues mèches basses. Les acheteurs institutionnels ont absorbé là sans que les bougies ferment aux extrêmes.<br><br><strong>Intraday :</strong> Repérer sur M15/M5 les bougies avec de longues mèches basses dans une zone de Discount HTF. L'entrée se fait <span class="warn">au-dessus de la mèche</span> — pas nécessairement à son extrémité.<br><br><strong>Ordre :</strong> <span class="ok">Buy Limit</span> sur le bas du corps des bougies à mèches. Stop en dessous de la mèche la plus basse.`},
  'old-low':{name:'Old Low / Old High',zone:'DISCOUNT — Niveau 7 (Fond du range)',badges:['<span class="pda-badge b-old">HTF</span>','<span class="pda-badge b-limit">Ordre Limit</span>'],body:`<strong>Définition :</strong> Ancien creux abritant des <span class="ok">Sell Stops</span>, ou ancien sommet cassé redevenu support majeur. C'est le niveau le plus bas du spectre Discount — la cible HTF ultime en Buy Program.<br><br><strong>Intraday :</strong> Surveiller les <span class="warn">equal lows</span> Daily/H4 et les creux de la semaine précédente. Un balayage de ces niveaux = piège à vendeurs → renversement potentiel haussier (Turtle Soup).<br><br><strong>Ordre :</strong> <span class="ok">Buy Limit</span> sur ou juste au-dessus de l'Old Low. SL sous le dernier swing low M5.`}
};

let currentPDA=null;

function showPDA(el,id,side){
  // Toggle
  if(currentPDA===id){
    document.querySelectorAll('.pda-item').forEach(i=>i.classList.remove('active-pda'));
    document.getElementById('pda-detail').style.display='none';
    currentPDA=null;return;
  }
  currentPDA=id;
  document.querySelectorAll('.pda-item').forEach(i=>i.classList.remove('active-pda'));
  el.classList.add('active-pda');
  const d=PDA_DATA[id];
  if(!d)return;
  document.getElementById('pda-detail-name').textContent=d.name;
  document.getElementById('pda-detail-name').className='pda-detail-name '+side;
  document.getElementById('pda-detail-zone').textContent=d.zone;
  document.getElementById('pda-detail-badges').innerHTML=d.badges.join(' ');
  document.getElementById('pda-detail-body').innerHTML=d.body;
  const det=document.getElementById('pda-detail');
  det.style.display='block';
  // Scroll smooth vers le détail
  setTimeout(()=>det.scrollIntoView({behavior:'smooth',block:'nearest'}),50);
}

// ══ SAISONNALITÉ ══
document.querySelectorAll('.saison-cat-btn').forEach(catBtn=>{
  catBtn.addEventListener('click',()=>{
    document.querySelectorAll('.saison-cat-btn').forEach(b=>b.classList.remove('active'));
    document.querySelectorAll('.saison-tabs').forEach(t=>t.classList.remove('active'));
    catBtn.classList.add('active');
    const targetTabs=document.getElementById('tabs-'+catBtn.dataset.cat);
    if(targetTabs){
      targetTabs.classList.add('active');
      const firstTab=targetTabs.querySelector('.saison-tab');
      if(firstTab) firstTab.click();
    }
  });
});

document.querySelectorAll('.saison-tab').forEach(tab=>{
  tab.addEventListener('click',()=>{
    const parentBar=tab.closest('.saison-tabs');
    if(parentBar) parentBar.querySelectorAll('.saison-tab').forEach(t=>t.classList.remove('active'));
    document.querySelectorAll('.saison-panel').forEach(p=>p.classList.remove('active'));
    tab.classList.add('active');
    const panel=document.getElementById('panel-'+tab.dataset.asset);
    if(panel) panel.classList.add('active');
  });
});

function initSaisonBanner(){
  const months=['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];
  const now=new Date();
  const m=now.getMonth(); // 0-11
  const mn=months[m];
  const banner=document.getElementById('saison-current-banner');
  if(banner) banner.innerHTML=`📅 Mois en cours : <strong>${mn}</strong> — Sélectionnez une catégorie (Forex/DXY, Bonds, Yields, Gold, Indices) pour consulter le biais saisonnier et les filtres ICT.`;

  // Highlight mois en cours selon mapping multi-actifs
  const highlights={
    dxy:{0:'dxy-jan',1:'dxy-jan',2:'dxy-mars',3:'dxy-mars',4:'dxy-mars',5:'dxy-juin',6:'dxy-juil',7:'dxy-juil',8:'dxy-juil',9:'dxy-nov',10:'dxy-nov',11:'dxy-nov'},
    eurusd:{0:'eur-jan',1:'eur-jan',2:'eur-mars',3:'eur-avr',4:'eur-avr',5:'eur-juin',6:'eur-juil',7:'eur-juil',8:'eur-juil',9:'eur-nov',10:'eur-nov',11:'eur-nov'},
    gbpusd:{0:'gbp-jan',1:'gbp-jan',2:'gbp-mars',3:'gbp-mars',4:'gbp-mars',5:'gbp-juin',6:'gbp-juil',7:'gbp-juil',8:'gbp-juil',9:'gbp-oct',10:'gbp-nov',11:'gbp-nov'},
    zb:{0:'zb-jan',1:'zb-jan',2:'zb-jan',3:'zb-jan',4:'zb-mai',5:'zb-mai',6:'zb-juin',7:'zb-juin',8:'zb-sept',9:'zb-sept',10:'zb-sept',11:'zb-sept'},
    zn:{0:'zn-jan',1:'zn-jan',2:'zn-jan',3:'zn-jan',4:'zn-mai',5:'zn-mai',6:'zn-juin',7:'zn-juin',8:'zn-juin',9:'zn-juin',10:'zn-nov',11:'zn-nov'},
    zf:{0:'zf-jan',1:'zf-jan',2:'zf-fev',3:'zf-fev',4:'zf-fev',5:'zf-juin',6:'zf-juin',7:'zf-juin',8:'zf-sept',9:'zf-sept',10:'zf-nov',11:'zf-nov'},
    us30y:{0:'us30y-jan',1:'us30y-jan',2:'us30y-jan',3:'us30y-jan',4:'us30y-mai',5:'us30y-mai',6:'us30y-ete',7:'us30y-ete',8:'us30y-sept',9:'us30y-sept',10:'us30y-sept',11:'us30y-sept'},
    us10y:{0:'us10y-jan',1:'us10y-jan',2:'us10y-jan',3:'us10y-jan',4:'us10y-mai',5:'us10y-mai',6:'us10y-juin',7:'us10y-juin',8:'us10y-juin',9:'us10y-juin',10:'us10y-nov',11:'us10y-nov'},
    us05y:{0:'us05y-jan',1:'us05y-jan',2:'us05y-jan',3:'us05y-jan',4:'us05y-mai',5:'us05y-mai',6:'us05y-juin',7:'us05y-juin',8:'us05y-juin',9:'us05y-juin',10:'us05y-juin',11:'us05y-juin'},
    gold:{0:'gold-dec',1:'gold-dec',2:'gold-mars',3:'gold-mars',4:'gold-mars',5:'gold-mars',6:'gold-juil',7:'gold-juil',8:'gold-sept',9:'gold-sept',10:'gold-sept',11:'gold-dec'},
    nq:{0:'nq-jan',1:'nq-fev',2:'nq-mars',3:'nq-avr',4:'nq-mai',5:'nq-juin',6:'nq-juil',7:'nq-aout',8:'nq-sept',9:'nq-oct',10:'nq-nov',11:'nq-dec'},
    ym:{0:'ym-jan',1:'ym-fev',2:'ym-mars',3:'ym-avr',4:'ym-mai',5:'ym-juin',6:'ym-juil',7:'ym-aout',8:'ym-sept',9:'ym-oct',10:'ym-nov',11:'ym-dec'},
    es:{0:'es-jan',1:'es-fev',2:'es-mars',3:'es-avr',4:'es-mai',5:'es-juin',6:'es-juil',7:'es-aout',8:'es-sept',9:'es-oct',10:'es-nov',11:'es-dec'}
  };
  Object.values(highlights).forEach(map=>{
    const id=map[m];
    if(id){const el=document.getElementById(id);if(el)el.classList.add('active-month');}
  });
}

// ══ TOAST ══
function showToast(msg){
  const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),2200);
}

// ══ FILTRE D'ABSTENTION (v8) & RITUELS ══
function toggleAbstentionBody(){
  const b=document.getElementById('abstention-body');
  if(b)b.style.display=b.style.display==='none'?'grid':'none';
}
function toggleAbst(el){
  el.classList.toggle('triggered');
  updateAbstentionStatus();
  saveAbstStates();
}
function updateAbstentionStatus(){
  const count=document.querySelectorAll('.abst-item.triggered').length;
  const st=document.getElementById('abstention-status');
  if(!st)return;
  if(count>0){
    st.className='abstention-status danger';
    st.textContent='🛑 ABSTENTION STRICTE ('+count+' feu'+(count>1?'x':'')+' rouge'+(count>1?'s':'')+')';
  }else{
    st.className='abstention-status';
    st.textContent='✅ VOIE LIBRE (0 feu rouge)';
  }
}
function saveAbstStates(){
  const today=new Date().toISOString().slice(0,10);
  const st={};
  document.querySelectorAll('.abst-item[data-abst]').forEach(el=>{st[el.dataset.abst]=el.classList.contains('triggered');});
  localStorage.setItem('mw-abst',JSON.stringify({date:today,st}));
}
function restoreAbstStates(){
  try{
    const saved=JSON.parse(localStorage.getItem('mw-abst')||'null');
    const today=new Date().toISOString().slice(0,10);
    if(!saved||saved.date!==today)return;
    Object.entries(saved.st||{}).forEach(([k,v])=>{
      const el=document.querySelector('.abst-item[data-abst="'+k+'"]');
      if(el&&v)el.classList.add('triggered');
    });
    updateAbstentionStatus();
  }catch(e){}
}
function switchRitual(btn,panelId){
  document.querySelectorAll('.ritual-tab').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.ritual-panel').forEach(p=>p.classList.remove('active'));
  btn.classList.add('active');
  const p=document.getElementById(panelId);
  if(p)p.classList.add('active');
}
document.addEventListener('DOMContentLoaded',restoreAbstStates);


// ══ PHASE FILTER & SD/ADR CALCULATOR (v8) ══
function filterPhase(btn,phase){
  document.querySelectorAll('.phase-pill').forEach(p=>p.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.phase-block').forEach(b=>{
    b.style.display=(phase==='ALL'||b.dataset.phase===phase)?'block':'none';
  });
}

function calcSD(){
  const h=parseFloat(document.getElementById('sd-high').value);
  const l=parseFloat(document.getElementById('sd-low').value);
  const adr=parseFloat(document.getElementById('sd-adr').value)||0;
  const bar=document.getElementById('sd-status-bar');
  if(!h||!l||h<=l){
    bar.textContent='Renseignez High > Low pour évaluer la compression.';
    bar.style.color='var(--text-muted)';
    return;
  }
  const mult=(h>20)?100:10000; // JPY vs majors
  const dec=(h>20)?2:4;
  const diff=h-l;
  const pips=Math.round(diff*mult*10)/10;
  const eq=((h+l)/2).toFixed(dec);
  const sd2Up=(h+2*diff).toFixed(dec);
  const sd2Dn=(l-2*diff).toFixed(dec);
  document.getElementById('sd-amp').textContent=pips+'p · '+eq;
  document.getElementById('sd-2sd').textContent=sd2Up+' / '+sd2Dn;
  if(pips<=30){
    bar.textContent='✅ COMPRESSION OPTIMALE ('+pips+' pips ≤ 30) — Projections ±2 SD très fiables.';
    bar.style.color='var(--buy)';
  }else if(pips<=40){
    bar.textContent='⚠️ LIMITE HAUTE ('+pips+' pips ≤ 40) — Acceptable mais prudence sur l\'expansion.';
    bar.style.color='var(--gold)';
  }else{
    bar.textContent='🛑 HORS NORME ('+pips+' pips > 40) — Projections SD inutilisables / éviter Londres sans reconsolidation.';
    bar.style.color='var(--sell)';
  }
  if(adr>0){
    const tpPips=Math.max(10,Math.round(adr-12));
    const lcPips=Math.round(adr*1.3);
    document.getElementById('sd-adr-tp').textContent=tpPips+' pips';
    document.getElementById('sd-lc').textContent=lcPips+' pips';
  }
}


// ══ MOTEUR INTELLIGENT & GAIN DE TEMPS (v8 PRO) ══
function initSmartAssistant(){
  // 1. Persistance du capital dans le calculateur
  const savedCap=localStorage.getItem('mw-capital');
  if(savedCap&&document.getElementById('calc-capital')){
    document.getElementById('calc-capital').value=savedCap;
  }

  // 2. Détection automatique d'une perte sur le dernier trade enregistré (Protocole Mitigation)
  const mitBanner=document.getElementById('auto-mitigation-banner');
  if(mitBanner&&entries.length>0){
    const sorted=[...entries].sort((a,b)=>b.id-a.id);
    const lastTrade=sorted.find(e=>e.setup==='yes'&&e.pnl!==''&&e.pnl!==undefined);
    if(lastTrade&&parseFloat(lastTrade.pnl)<0){
      mitBanner.style.display='block';
      mitBanner.innerHTML=`⚠️ <strong>ALERTE MITIGATION ACTIVE :</strong> Votre dernier trade (${lastTrade.asset||'GBP/USD'} le ${lastTrade.date}) a clôturé à <strong>${lastTrade.pnl} pips</strong>. Conformément au plan ICT, divisez votre risque par 2 (0.5%) jusqu'à effacer la perte (+2R).`;
      const riskSel=document.getElementById('calc-risk');
      if(riskSel)riskSel.value='0.5';
    }
  }

  // 3. Diagnostic intelligent du Jour de la Semaine & Saisonnalité
  const now=new Date();
  const dow=now.getDay(); // 0=Dim, 1=Lun, 2=Mar, 3=Mer, 4=Jeu, 5=Ven, 6=Sam
  const month=now.getMonth(); // 6=Juil, 7=Août
  const dayAdvice={
    0:{badge:'⛔ MARCHÉ FERMÉ (Dimanche)',msg:'Préparez le rituel Week-end (15 min) : Forex Factory, Risk-On/Off, COT & ligne d\'ouverture 00:00 NY.',color:'var(--sell)'},
    1:{badge:'🟡 LUNDI — PRUDENCE',msg:'Journée d\'observation / fakeouts fréquents. Attendez la prise de liquidité ou réservez le capital pour Mardi/Mercredi.',color:'var(--gold)'},
    2:{badge:'🟢 MARDI — FENÊTRE OPTIMALE',msg:'Statistique ICT : <strong>77 % des creux hebdo</strong> (Buy) et <strong>70 % des sommets hebdo</strong> (Sell) se forment entre Mardi et Mercredi.',color:'var(--buy)'},
    3:{badge:'🟢 MERCREDI — FENÊTRE OPTIMALE',msg:'Cœur de l\'expansion hebdomadaire ICT. Idéal pour les Daytrades directionnels London/NY.',color:'var(--buy)'},
    4:{badge:'🟡 JEUDI — VIGILANCE RETOURNEMENT',msg:'Surveillez la ligne d\'ouverture Dim/Lun 00:00 NY : une traversée aujourd\'hui signale souvent le retournement hebdomadaire (NY / London Close).',color:'var(--gold)'},
    5:{badge:'🟠 VENDREDI — PRISE DE PROFITS',msg:'Si l\'objectif hebdomadaire Daily a été atteint jeudi, abstention stricte (Friday Consolidation / Reversal). Sinon cibles courtes avant 11h NY.',color:'var(--gold)'},
    6:{badge:'⛔ MARCHÉ FERMÉ (Samedi)',msg:'Revue hebdomadaire & export PDF dans l\'onglet Stats.',color:'var(--sell)'}
  };
  const info=dayAdvice[dow];
  const summerWarn=(month===6||month===7)?' <span style="color:var(--sell);font-weight:600;">⚠️ Période estivale (Juil–Août) : vigilance profil Seek &amp; Destroy.</span>':'';
  const banner=document.getElementById('smart-day-text');
  if(banner){
    banner.innerHTML=`<strong style="color:${info.color};">${info.badge}</strong> — ${info.msg}${summerWarn}`;
  }
}

function applyMacroBias(bias){
  // Bascule sur l'onglet Plan du Jour et active le biais recommandé
  document.querySelectorAll('.nav-tab').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  const planTab=document.querySelector('.nav-tab[data-view="plan"]');
  const planView=document.getElementById('view-plan');
  if(planTab)planTab.classList.add('active');
  if(planView)planView.classList.add('active');
  const btn=document.querySelector(`.bias-btn[data-bias="${bias}"]`);
  if(btn)btn.click();
  showToast('Biais '+bias.toUpperCase()+' synchronisé depuis Macro ⚡');
}

function autoSmartPrefill(){
  if(!currentBias){
    showToast('Sélectionnez d\'abord Buy ou Sell');
    return;
  }
  const countAbst=document.querySelectorAll('.abst-item.triggered').length;
  if(countAbst>0){
    showToast('🛑 Impossible : '+countAbst+' feu(x) rouge(s) d\'abstention actif(s)');
    return;
  }
  const dow=new Date().getDay();
  const prefix=currentBias==='buy'?'b':'s';
  // Coche automatiquement le point 1 (Calendrier) et le point 2 (Filtre session/jour si Mar/Mer/Jeu)
  const keysToCheck=[prefix+'1'];
  if(dow>=2&&dow<=4)keysToCheck.push(prefix+'2');
  // Si des éléments macro dans le même sens sont cochés (>=3), coche aussi le point 3
  const macroSideCount=[...document.querySelectorAll(`.check-item[data-side="${currentBias}"]`)].filter(el=>el.classList.contains('checked')).length;
  if(macroSideCount>=3)keysToCheck.push(prefix+'3');

  keysToCheck.forEach(k=>{
    if(!checkStates[k]){
      checkStates[k]=true;
      const el=document.querySelector(`.check-item[data-key="${k}"]`);
      if(el)el.classList.add('checked');
    }
  });
  updateProb();updateStepRings();saveSessionState();
  showToast('⚡ '+keysToCheck.length+' critère(s) pré-validé(s) selon le contexte');
}

function buildPriceLevelsCard(slPips){
  const entry=parseFloat(document.getElementById('calc-entry-price').value);
  if(!entry||!slPips)return '';
  const dir=document.getElementById('calc-dir').value;
  const adr=parseFloat(document.getElementById('calc-adr-pips').value)||80;
  const mult=(entry>20)?100:10000;
  const dec=(entry>20)?2:4;
  const sign=dir==='buy'?1:-1;

  const slPrice=(entry - sign*(slPips/mult)).toFixed(dec);
  const tp1Price=(entry + sign*(25/mult)).toFixed(dec); // +25 pips partiel
  const beTrigger=(entry + sign*((adr*0.45)/mult)).toFixed(dec); // 45% ADR règle Mois 8
  const tp2Pips=Math.max(slPips*2, Math.round(adr-12));
  const tp2Price=(entry + sign*(tp2Pips/mult)).toFixed(dec);

  return `<div style="margin-top:10px;padding:12px;background:var(--bg-card);border:1px solid var(--gold-border);border-radius:6px;">
    <div style="font-size:10px;font-weight:700;color:var(--gold);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:8px;">🎯 Niveaux Calculés (${dir.toUpperCase()} · Entrée ${entry.toFixed(dec)})</div>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:6px;text-align:center;">
      <div style="background:var(--bg-elevated);padding:8px;border-radius:4px;"><div style="font-size:9px;color:var(--text-dim);">SL (${slPips}p)</div><div style="font-family:'Cinzel',serif;font-size:13px;color:var(--sell);font-weight:700;">${slPrice}</div></div>
      <div style="background:var(--bg-elevated);padding:8px;border-radius:4px;"><div style="font-size:9px;color:var(--text-dim);">TP1 (+25p)</div><div style="font-family:'Cinzel',serif;font-size:13px;color:var(--buy);font-weight:700;">${tp1Price}</div></div>
      <div style="background:var(--bg-elevated);padding:8px;border-radius:4px;"><div style="font-size:9px;color:var(--text-dim);">BE (45% ADR)</div><div style="font-family:'Cinzel',serif;font-size:13px;color:var(--gold);font-weight:700;">${beTrigger}</div></div>
      <div style="background:var(--bg-elevated);padding:8px;border-radius:4px;"><div style="font-size:9px;color:var(--text-dim);">TP2 ADR (${tp2Pips}p)</div><div style="font-family:'Cinzel',serif;font-size:13px;color:var(--buy);font-weight:700;">${tp2Price}</div></div>
    </div>
  </div>`;
}

function sendCalcToJournal(){
  const entry=parseFloat(document.getElementById('calc-entry-price').value);
  const slPips=parseFloat(document.getElementById('calc-sl').value);
  const dir=document.getElementById('calc-dir').value;
  openModal();
  document.getElementById('j-bias').value=dir;
  document.getElementById('j-setup').value='yes';
  if(entry&&slPips){
    const mult=(entry>20)?100:10000;
    const dec=(entry>20)?2:4;
    const sign=dir==='buy'?1:-1;
    document.getElementById('j-entry').value=entry.toFixed(dec);
    document.getElementById('j-sl').value=(entry - sign*(slPips/mult)).toFixed(dec);
    document.getElementById('j-tp1').value=(entry + sign*(25/mult)).toFixed(dec);
  }
  showToast('Niveaux transférés dans le Journal 📥');
}

function copySessionBrief(){
  const dateStr=document.getElementById('date-display').textContent;
  const biasStr=currentBias?currentBias.toUpperCase()+' PROGRAM':'NON DÉFINI';
  const pct=document.getElementById('prob-pct').textContent;
  const abstCount=document.querySelectorAll('.abst-item.triggered').length;
  const checkedList=[];
  if(currentBias){
    STEPS[currentBias].forEach(s=>s.items.forEach(i=>{
      if(checkStates[i.key])checkedList.push('✓ '+i.text.replace(/<[^>]+>/g,'').split('—')[0].trim());
    }));
  }
  const brief=[
    `🐺 THE MASTERWOLF ICT PLAN — ${dateStr}`,
    `• Biais : ${biasStr} | Probabilité : ${pct}`,
    `• Feux rouges abstention : ${abstCount}`,
    checkedList.length?'• Critères validés :\n  '+checkedList.join('\n  '):'• Aucun critère validé'
  ].join('\n');
  if(navigator.clipboard){
    navigator.clipboard.writeText(brief).then(()=>showToast('Brief copié dans le presse-papiers 📋'));
  }else{
    showToast('Brief prêt');
  }
}

// Sauvegarder automatiquement le capital dès sa saisie
document.addEventListener('DOMContentLoaded',()=>{
  const capInput=document.getElementById('calc-capital');
  if(capInput){
    capInput.addEventListener('input',()=>localStorage.setItem('mw-capital',capInput.value));
  }
  initSmartAssistant();
});

// ══ STRUCTURATION LIGNE PAR LIGNE + FEEDBACK ANIMÉ AU CLIC ══
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.check-item[data-macro] .check-text').forEach(txtEl => {
    const raw = txtEl.innerHTML;
    const m = raw.match(/^<strong>([^<]+)<\/strong>\s*[—-]\s*(.*)$/s);
    if (m) {
      txtEl.outerHTML = `<div class="check-content">
        <div class="check-title-main" style="font-size:13px;">${m[1].trim()}</div>
        ${renderLinesHTML(m[2].trim())}
      </div>`;
    }
  });

  document.body.addEventListener('click', (e) => {
    const item = e.target.closest('.check-item');
    if (item) {
      item.classList.remove('just-checked');
      void item.offsetWidth;
      item.classList.add('just-checked');
    }
  });
});



// ════════════════════════════════════════════════════════════════════
// V14 — QUESTIONNAIRE MACRO MULTI-TIMEFRAME & SYNTHÈSE AUTOMATIQUE
// ════════════════════════════════════════════════════════════════════
const MACRO_QUESTIONS = [
  {
    id: 'commodities_m',
    tf: 'MONTHLY (1× / mois · lag 6–12m)',
    asset: '1. Matières Premières (CRB · GSCI · Gold · Oil · Copper)',
    question: 'Quelle est la direction structurelle des Matières Premières sur Monthly ?',
    hint: 'Compare CRB Index / GSCI / Métaux industriels sur les 9 à 18 dernières bougies Monthly.',
    options: [
      { val: 'up', tone: 'up', label: '📈 Hausse nette (Expansion)', sub: 'CRB / Énergie / Métaux en tendance haussière' },
      { val: 'dn', tone: 'dn', label: '📉 Baisse nette (Contraction)', sub: 'Chute généralisée des matières premières' },
      { val: 'flat', tone: 'flat', label: '➖ Range / Consolidation', sub: 'Pas de direction claire sur Monthly' }
    ]
  },
  {
    id: 'bonds_m',
    tf: 'MONTHLY (Structure Long Terme)',
    asset: '2. Obligations US Long Terme (ZB 30Y · ZN 10Y)',
    question: 'Quelle est la direction des Obligations (ZB 30Y / ZN 10Y) sur Monthly ?',
    hint: 'En Inflation, les obligations baissent avec 6–12 mois de décalage. En Déflation, elles explosent à la hausse.',
    options: [
      { val: 'up', tone: 'up', label: '📈 Hausse (Prix ZB/ZN montent)', sub: 'Demande refuge ou anticipation baisse des taux' },
      { val: 'dn', tone: 'dn', label: '📉 Baisse (Prix ZB/ZN chutent)', sub: 'Vente obligataire / pression inflationniste' },
      { val: 'flat', tone: 'flat', label: '➖ Range / Consolidation', sub: 'Compression obligataire Monthly' }
    ]
  },
  {
    id: 'bonds_w_d',
    tf: 'WEEKLY · DAILY · H4',
    asset: '3. Obligations US (ZN 10Y · ZB 30Y · ZF 5Y)',
    question: 'Quelle est la tendance actuelle des Obligations (ZN / ZB) sur Weekly / Daily / H4 ?',
    hint: 'Vérifie l’Order Flow Weekly & Daily des futures obligataires avant la session.',
    options: [
      { val: 'up', tone: 'up', label: '📈 Haussier (ZN / ZB montent)', sub: 'Achats sur obligations · soutien taux bas' },
      { val: 'dn', tone: 'dn', label: '📉 Baissier (ZN / ZB baissent)', sub: 'Ventes sur obligations · pression taux hauts' },
      { val: 'flat', tone: 'flat', label: '➖ Neutre / Range', sub: 'Consolidation entre PD Arrays Daily' }
    ]
  },
  {
    id: 'yields_w_d',
    tf: 'WEEKLY · DAILY · H4',
    asset: '4. Rendements US (US10Y · US30Y · US05Y)',
    question: 'Quelle est la direction des Rendements US (US10Y / US30Y) sur Weekly / Daily / H4 ?',
    hint: 'Miroir inverse des obligations : « Money seeks yield » attire les capitaux vers le Dollar quand les rendements montent.',
    options: [
      { val: 'up', tone: 'up', label: '📈 Rendements montent (US10Y ↑)', sub: 'Pression haussière sur les taux & le DXY' },
      { val: 'dn', tone: 'dn', label: '📉 Rendements baissent (US10Y ↓)', sub: 'Détente des taux · défavorable au DXY' },
      { val: 'flat', tone: 'flat', label: '➖ Stables / Range', sub: 'Pas d’impulsion franche sur les taux' }
    ]
  },
  {
    id: 'equities_w_d',
    tf: 'WEEKLY · DAILY · H4',
    asset: '5. Indices Actions (ES · NQ · YM · Nikkei)',
    question: 'Quelle est la direction des Indices Actions (S&P 500 / Nasdaq) sur Weekly / Daily / H4 ?',
    hint: 'Mesure directe de l’appétit au risque institutionnel (Risk-On vs Risk-Off).',
    options: [
      { val: 'up', tone: 'up', label: '📈 Haussier (Indices montent)', sub: 'Appétit pour le risque · flux acheteurs' },
      { val: 'dn', tone: 'dn', label: '📉 Baissier (Indices chutent)', sub: 'Aversion au risque · liquidation actions' },
      { val: 'flat', tone: 'flat', label: '➖ Consolidation / Indécis', sub: 'Range Weekly / Daily sans cassure' }
    ]
  },
  {
    id: 'dxy_w_d',
    tf: 'WEEKLY · DAILY · H4',
    asset: '6. Dollar Index (DXY)',
    question: 'Quelle est la direction du DXY sur Weekly / Daily / H4 ?',
    hint: 'Le DXY évolue en miroir inverse de GBP/USD et EUR/USD. Vérifie sa réaction sur PD Array HTF.',
    options: [
      { val: 'up', tone: 'up', label: '📈 DXY Haussier (Buy Program)', sub: 'Dollar fort → Pression baissière sur GBP/USD' },
      { val: 'dn', tone: 'dn', label: '📉 DXY Baissier (Sell Program)', sub: 'Dollar faible → Soutien haussier sur GBP/USD' },
      { val: 'flat', tone: 'flat', label: '➖ DXY en Range / Consolidation', sub: 'Attente de catalyseur ou SMT' }
    ]
  }
];

let mwAnswers = JSON.parse(localStorage.getItem('mw_macro_wizard_v14') || '{}');
let mwCurrentStep = 0;
let mwShowAll = false;

function renderMacroWizard(){
  const container = document.getElementById('mw-questions-container');
  const navBar = document.getElementById('mw-nav-bar');
  const stepBadge = document.getElementById('mw-step-badge');
  const progLabel = document.getElementById('mw-progress-label');
  const progFill = document.getElementById('mw-progress-fill');
  const dotsEl = document.getElementById('mw-dots');
  const prevBtn = document.getElementById('mw-prev-btn');
  const nextBtn = document.getElementById('mw-next-btn');

  if(!container) return;

  const answeredCount = MACRO_QUESTIONS.filter(q => mwAnswers[q.id]).length;
  const pct = Math.round((answeredCount / MACRO_QUESTIONS.length) * 100);
  if(progFill){
    progFill.style.width = pct + '%';
    progFill.style.background = answeredCount === MACRO_QUESTIONS.length ? 'var(--buy)' : 'var(--gold)';
  }
  if(progLabel){
    progLabel.textContent = `${answeredCount} / ${MACRO_QUESTIONS.length} actifs renseignés`;
  }

  const questionsToRender = mwShowAll ? MACRO_QUESTIONS : [MACRO_QUESTIONS[mwCurrentStep]];

  container.innerHTML = questionsToRender.map((q) => {
    const selectedVal = mwAnswers[q.id] || '';
    return `
      <div class="mw-q-card">
        <div class="mw-q-top">
          <span style="font-size:11.5px;font-weight:700;color:var(--gold);">${q.asset}</span>
          <span class="mw-tf-pill">${q.tf}</span>
        </div>
        <div class="mw-q-title">${q.question}</div>
        <div class="mw-q-hint">${q.hint}</div>
        <div class="mw-options-grid">
          ${q.options.map(opt => {
            const isSel = selectedVal === opt.val;
            const selClass = isSel ? `selected-${opt.tone}` : '';
            return `
              <button type="button" class="mw-opt-btn ${selClass}" onclick="selectMacroAnswer('${q.id}', '${opt.val}')">
                <span class="mw-opt-label">${opt.label}</span>
                <span class="mw-opt-sub">${opt.sub}</span>
              </button>
            `;
          }).join('')}
        </div>
      </div>
    `;
  }).join('');

  if(mwShowAll){
    if(navBar) navBar.style.display = 'none';
    if(stepBadge) stepBadge.textContent = 'VUE COMPLÈTE (6 ACTIFS)';
  } else {
    if(navBar) navBar.style.display = 'flex';
    if(stepBadge) stepBadge.textContent = `QUESTION ${mwCurrentStep + 1} / ${MACRO_QUESTIONS.length}`;
    if(prevBtn) prevBtn.disabled = mwCurrentStep === 0;
    if(nextBtn){
      nextBtn.textContent = mwCurrentStep === MACRO_QUESTIONS.length - 1 ? 'Voir Synthèse ✓' : 'Suivant →';
    }
    if(dotsEl){
      dotsEl.innerHTML = MACRO_QUESTIONS.map((q, i) => {
        const cls = ['mw-dot'];
        if(mwAnswers[q.id]) cls.push('answered');
        if(i === mwCurrentStep) cls.push('current');
        return `<span class="${cls.join(' ')}" onclick="jumpMacroQuestion(${i})" title="Question ${i+1}"></span>`;
      }).join('');
    }
  }

  computeMacroWizardVerdict();
}

function selectMacroAnswer(qId, val){
  mwAnswers[qId] = val;
  localStorage.setItem('mw_macro_wizard_v14', JSON.stringify(mwAnswers));

  // Auto-advance smoothly in guided mode if not on last question
  if(!mwShowAll && mwCurrentStep < MACRO_QUESTIONS.length - 1){
    mwCurrentStep++;
  }
  renderMacroWizard();
}

function nextMacroQuestion(){
  if(mwCurrentStep < MACRO_QUESTIONS.length - 1){
    mwCurrentStep++;
    renderMacroWizard();
  } else {
    const verdictEl = document.getElementById('mw-verdict-box');
    if(verdictEl) verdictEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

function prevMacroQuestion(){
  if(mwCurrentStep > 0){
    mwCurrentStep--;
    renderMacroWizard();
  }
}

function jumpMacroQuestion(idx){
  mwCurrentStep = idx;
  renderMacroWizard();
}

function toggleMacroWizardMode(){
  mwShowAll = !mwShowAll;
  const btn = document.getElementById('mw-mode-toggle');
  if(btn){
    btn.classList.toggle('active', mwShowAll);
    btn.textContent = mwShowAll ? '🎯 Mode Pas-à-Pas (1 question)' : '📋 Voir toutes les questions';
  }
  renderMacroWizard();
}

function resetMacroWizard(){
  mwAnswers = {};
  mwCurrentStep = 0;
  localStorage.removeItem('mw_macro_wizard_v14');
  renderMacroWizard();
  showToast('Diagnostic Macro réinitialisé');
}

function computeMacroWizardVerdict(){
  const box = document.getElementById('mw-verdict-box');
  if(!box) return;

  const answeredCount = MACRO_QUESTIONS.filter(q => mwAnswers[q.id]).length;
  if(answeredCount === 0){
    box.innerHTML = `
      <div style="padding:14px 16px;border-radius:10px;background:var(--bg-elevated);font-size:12px;color:var(--text-muted);text-align:center;">
        Sélectionne la direction de tes actifs ci-dessus pour obtenir le diagnostic complet (Inflation/Déflation, Taux, Risk-On/Risk-Off & Biais GBP/USD).
      </div>`;
    return;
  }

  const cm = mwAnswers['commodities_m'];
  const bm = mwAnswers['bonds_m'];
  const bw = mwAnswers['bonds_w_d'];
  const yw = mwAnswers['yields_w_d'];
  const eq = mwAnswers['equities_w_d'];
  const dxy = mwAnswers['dxy_w_d'];

  // 1. DIAGNOSTIC INFLATION VS DÉFLATION (Monthly)
  let infTitle = '⏳ En attente (Monthly)';
  let infColor = 'var(--text-muted)';
  let infDesc = 'Renseigne Matières Premières & Obligations sur Monthly.';
  if(cm && bm){
    if(cm === 'up' && bm === 'dn'){
      infTitle = '🔥 INFLATION (Commodities Lead)';
      infColor = 'var(--buy)';
      infDesc = 'Matières premières ↑ + Obligations ZB/ZN ↓ sur Monthly → Pression haussière structurelle sur les devises matières & GBP/USD.';
    } else if(bm === 'up' && (cm === 'dn' || eq === 'dn')){
      infTitle = '❄️ DÉFLATION (Cas rare)';
      infColor = 'var(--sell)';
      infDesc = 'Obligations ZB/ZN montent fortement + Matières premières ↓ → Fuite vers la sécurité & Dollar fort (Sell Program).';
    } else if(cm === 'up' && bm === 'up'){
      infTitle = '🔄 TRANSITION / REFLATION';
      infColor = 'var(--gold)';
      infDesc = 'Matières montent mais obligations soutenues → Transition de cycle (surveiller basculement trimestriel).';
    } else {
      infTitle = '⚖️ ÉQUILIBRE / CONSOLIDATION MONTHLY';
      infColor = 'var(--gold)';
      infDesc = 'Pas de divergence extrême Inflation/Déflation sur Monthly — privilégier le driver Taux & Risk-On/Off.';
    }
  }

  // 2. DIAGNOSTIC HAUSSE VS BAISSE DES TAUX (Weekly / Daily / H4)
  let rateTitle = '⏳ En attente (Taux)';
  let rateColor = 'var(--text-muted)';
  let rateDesc = 'Renseigne Obligations & Rendements US10Y.';
  if(bw || yw){
    if((yw === 'up' || bw === 'dn') && !(yw === 'dn' && bw === 'up')){
      rateTitle = '📈 HAUSSE DES TAUX (Driver Taux)';
      rateColor = 'var(--sell)';
      rateDesc = 'Rendements US10Y ↑ / Obligations ZN ↓ → « Money seeks yield » : soutien au DXY, pression vendeuse sur GBP/USD.';
    } else if((yw === 'dn' || bw === 'up') && !(yw === 'up' && bw === 'dn')){
      rateTitle = '📉 BAISSE DES TAUX (Driver Taux)';
      rateColor = 'var(--buy)';
      rateDesc = 'Rendements US10Y ↓ / Obligations ZN ↑ → Fuite des rendements USD en baisse : DXY baissier, soutien acheteur sur GBP/USD.';
    } else {
      rateTitle = '➖ TAUX NEUTRES / CONSOLIDATION';
      rateColor = 'var(--gold)';
      rateDesc = 'Taux en range — attendre une cassure sur ZN / US10Y.';
    }
  }

  // 3. DIAGNOSTIC RISK-ON VS RISK-OFF (Weekly / Daily / H4)
  let riskTitle = '⏳ En attente (Appétit Risque)';
  let riskColor = 'var(--text-muted)';
  let riskDesc = 'Renseigne Actions, Obligations, Matières et DXY.';
  if(eq || dxy || bw){
    let riskOnScore = 0;
    let riskOffScore = 0;
    if(eq === 'up') riskOnScore++;
    if(eq === 'dn') riskOffScore++;
    if(dxy === 'dn') riskOnScore++;
    if(dxy === 'up') riskOffScore++;
    if(bw === 'dn') riskOnScore++;
    if(bw === 'up') riskOffScore++;
    if(cm === 'up') riskOnScore++;
    if(cm === 'dn') riskOffScore++;

    if(riskOnScore >= 3 && riskOnScore > riskOffScore){
      riskTitle = '🟢 RISK-ON (Appétit au Risque)';
      riskColor = 'var(--buy)';
      riskDesc = 'Actions ↑ · Matières ↑ · Obligations ↓ · DXY faible → Flux acheteurs sur devises risquées (GBP/USD, EUR/USD).';
    } else if(riskOffScore >= 3 && riskOffScore > riskOnScore){
      riskTitle = '🔴 RISK-OFF (Aversion au Risque)';
      riskColor = 'var(--sell)';
      riskDesc = 'Actions ↓ · Obligations refuge ↑ · DXY fort → Flux défensifs vers le Dollar (Sell Program GBP/USD).';
    } else {
      riskTitle = '🟡 MIXTE / DÉCOUPLAGE (< 3/4 classes)';
      riskColor = 'var(--gold)';
      riskDesc = 'Moins de 3 classes sur 4 alignées → Consolidation intermarché. Réduire le levier et viser des cibles intraday courtes.';
    }
  }

  // 4. CONCLUSION SYNTHÈSE GLOBALE POUR GBP/USD
  let buyVotes = 0;
  let sellVotes = 0;
  if(dxy === 'dn') buyVotes += 2;
  if(dxy === 'up') sellVotes += 2;
  if(bw === 'up' || yw === 'dn') buyVotes += 1;
  if(bw === 'dn' || yw === 'up') sellVotes += 1;
  if(eq === 'up') buyVotes += 1;
  if(eq === 'dn') sellVotes += 1;
  if(cm === 'up' && bm === 'dn') buyVotes += 1;
  if(bm === 'up' && cm === 'dn') sellVotes += 1;

  // Check ZN & DXY in tandem warning
  const tandemWarning = (bw && dxy && bw === dxy && bw !== 'flat');

  let finalBadge = '';
  let finalHeadline = '';
  let finalAction = '';
  let borderCol = 'var(--gold-border)';

  if(tandemWarning){
    borderCol = 'var(--gold)';
    finalBadge = '<span style="background:rgba(201,168,76,0.18);color:var(--gold);padding:4px 10px;border-radius:20px;font-size:10.5px;font-weight:700;">⚠️ ALERTE DÉCOUPLAGE (ZN & DXY IN TANDEM)</span>';
    finalHeadline = 'CONSOLIDATION INTERMARCHÉ — PRUDENCE MAXIMALE';
    finalAction = 'ZN (Obligations) et DXY évoluent dans le même sens. Réduire le levier de 50 %, privilégier le scalping intraday sur Killzone ou rester flat.';
  } else if(buyVotes >= 3 && buyVotes > sellVotes + 1){
    borderCol = 'var(--buy)';
    finalBadge = '<span class="badge-buy">BUY PROGRAM FAVORABLE SUR GBP/USD</span>';
    finalHeadline = 'SYNTHÈSE MACRO HAUSSIÈRE (GBP/USD ↑)';
    finalAction = 'Alignement intermarché porteur pour l’achat : chercher un Discount PD Array HTF (OB / FVG / OTE 62–79 %) sur GBP/USD avec DXY en Sell Program.';
  } else if(sellVotes >= 3 && sellVotes > buyVotes + 1){
    borderCol = 'var(--sell)';
    finalBadge = '<span class="badge-sell">SELL PROGRAM FAVORABLE SUR GBP/USD</span>';
    finalHeadline = 'SYNTHÈSE MACRO BAISSIÈRE (GBP/USD ↓)';
    finalAction = 'Alignement intermarché porteur pour la vente : chercher un Premium PD Array HTF (OB / FVG / OTE 62–79 %) sur GBP/USD avec DXY en Buy Program.';
  } else {
    borderCol = 'var(--gold)';
    finalBadge = '<span style="background:rgba(201,168,76,0.18);color:var(--gold);padding:4px 10px;border-radius:20px;font-size:10.5px;font-weight:700;">⚖️ BIAIS MIXTE / ATTENTE DE CONFIRMATION</span>';
    finalHeadline = 'ALIGNEMENT PARTIEL — ATTENDRE SMT OU CASSURE DXY';
    finalAction = 'Les 4 classes d’actifs ne sont pas encore synchronisées. Attendre une divergence SMT (08:00–08:30 NY) ou une réaction nette du DXY sur un PD Array Daily.';
  }

  box.innerHTML = `
    <div class="mw-verdict-panel" style="border-color:${borderCol};">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;margin-bottom:8px;">
        <div style="font-family:'Cinzel',serif;font-size:13px;font-weight:700;color:var(--text);">${finalHeadline}</div>
        ${finalBadge}
      </div>
      <div style="font-size:12.5px;color:var(--text-muted);line-height:1.6;">${finalAction}</div>

      <div class="mw-regime-pills">
        <div class="mw-regime-card">
          <div class="mw-regime-cat">Cycle Prix (Monthly)</div>
          <div class="mw-regime-val" style="color:${infColor};">${infTitle}</div>
          <div class="mw-regime-desc">${infDesc}</div>
        </div>
        <div class="mw-regime-card">
          <div class="mw-regime-cat">Driver Taux (Weekly · Daily · H4)</div>
          <div class="mw-regime-val" style="color:${rateColor};">${rateTitle}</div>
          <div class="mw-regime-desc">${rateDesc}</div>
        </div>
        <div class="mw-regime-card">
          <div class="mw-regime-cat">Sentiment Global (Weekly · Daily · H4)</div>
          <div class="mw-regime-val" style="color:${riskColor};">${riskTitle}</div>
          <div class="mw-regime-desc">${riskDesc}</div>
        </div>
      </div>
      <div style="display:flex;justify-content:flex-end;gap:8px;flex-wrap:wrap;margin-top:12px;">
        <button type="button" class="btn-sm btn-export-entry" onclick="syncWizardToMacroChecklist()">☑️ Cocher automatiquement la Checklist Macro</button>
      </div>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', () => {
  renderMacroWizard();
});


// ══ PONT DIAGNOSTIC MACRO -> CHECKLIST BUY/SELL & BACKUP JSON ══
function syncWizardToMacroChecklist(){
  const cm = mwAnswers['commodities_m'];
  const bm = mwAnswers['bonds_m'];
  const bw = mwAnswers['bonds_w_d'];
  const yw = mwAnswers['yields_w_d'];
  const eq = mwAnswers['equities_w_d'];
  const dxy = mwAnswers['dxy_w_d'];

  if(!cm && !bm && !bw && !yw && !eq && !dxy){
    showToast('Répondez à au moins une question du diagnostic');
    return;
  }

  const setMacroBox = (key, checked) => {
    const el = document.querySelector(`.check-item[data-macro="${key}"]`);
    if(el) el.classList.toggle('checked', Boolean(checked));
  };

  // Buy Program criteria
  const buyRegime = (bw === 'up' && dxy === 'dn') || (cm === 'up' && bm === 'dn') || (eq === 'up' && dxy === 'dn');
  const buyDxy = (dxy === 'dn');
  const buyBond = (bw === 'up' || yw === 'dn');

  // Sell Program criteria
  const sellRegime = (bw === 'dn' && dxy === 'up') || (bm === 'up' && cm === 'dn') || (eq === 'dn' && dxy === 'up');
  const sellDxy = (dxy === 'up');
  const sellBond = (bw === 'dn' || yw === 'up');

  setMacroBox('mb-regime', buyRegime);
  setMacroBox('mb-dxy', buyDxy);
  setMacroBox('mb-bond', buyBond);

  setMacroBox('ms-regime', sellRegime);
  setMacroBox('ms-dxy', sellDxy);
  setMacroBox('ms-bond', sellBond);

  updateMacroSynthese();
  showToast('☑️ Checklist Macro Buy/Sell synchronisée avec le diagnostic');
}

function exportJournalJSON(){
  const payload = {
    app: 'THE MASTERWOLF ICT PLAN',
    exportedAt: new Date().toISOString(),
    entries,
    capital: localStorage.getItem('mw-capital') || ''
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `masterwolf-ict-backup-${new Date().toISOString().slice(0,10)}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
  showToast('💾 Sauvegarde JSON téléchargée');
}

function importJournalJSON(event){
  const file = event.target.files && event.target.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = (ev) => {
    try {
      const data = JSON.parse(ev.target.result);
      const imported = Array.isArray(data) ? data : (Array.isArray(data.entries) ? data.entries : null);
      if(!imported) throw new Error('Format invalide');
      const existingIds = new Set(entries.map(e => e.id));
      let added = 0;
      imported.forEach(item => {
        if(item && item.date && !existingIds.has(item.id)){
          entries.push(item);
          added++;
        }
      });
      if(data.capital && !localStorage.getItem('mw-capital')){
        localStorage.setItem('mw-capital', data.capital);
      }
      saveEntries();
      renderJournal();
      loadStats();
      showToast(`📂 ${added} session(s) restaurée(s) avec succès`);
    } catch (err) {
      showToast('❌ Fichier JSON invalide');
    }
    event.target.value = '';
  };
  reader.readAsText(file);
}
