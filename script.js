const QUESTIONS = [
  {
    "id": 1,
    "text": "おすすめの授業は?"
  },
  {
    "id": 2,
    "text": "ボランティアのやりがいはなに?"
  },
  {
    "id": 3,
    "text": "大学のおすすめスポットはどこ?"
  },
  {
    "id": 4,
    "text": "最近ハマっていることはなんですか?"
  },
  {
    "id": 5,
    "text": "きのこ派たけのこ派?"
  },
  {
    "id": 6,
    "text": "資格の勉強はしてますか?"
  },
  {
    "id": 7,
    "text": "このサークルの強みは?"
  },
  {
    "id": 8,
    "text": "大学以外でよく行く場所はどこ?"
  },
  {
    "id": 9,
    "text": "サークルに入った理由はなに?"
  },
  {
    "id": 10,
    "text": "学食またはお昼ご飯のおすすめは?"
  },
  {
    "id": 11,
    "text": "バイトの給料はどんなことに使ってる?"
  },
  {
    "id": 12,
    "text": "イベントの企画はどうやって立ち上げるか"
  },
  {
    "id": 13,
    "text": "所属しているゼミの内容はなに"
  },
  {
    "id": 14,
    "text": "大学生のうちに取っておいた方が良い資格"
  },
  {
    "id": 15,
    "text": "サークル活動の中で1番やって良かったことは?"
  },
  {
    "id": 16,
    "text": "1年生の時はどんな時間割だったか"
  },
  {
    "id": 17,
    "text": "大学周辺のおすすめのご飯"
  },
  {
    "id": 18,
    "text": "サークル活動で人間関係に悩むことはあるか"
  },
  {
    "id": 19,
    "text": "出席重視とテスト1発勝負の授業はどちらが好きか"
  },
  {
    "id": 20,
    "text": "資格勉強とサークルの両立は可能か"
  },
  {
    "id": 21,
    "text": "サークルにはどんな性格の人が多いか"
  },
  {
    "id": 22,
    "text": "バイト先で人間関係を良くするコツはなにか"
  },
  {
    "id": 23,
    "text": "大学生活で買って良かったものはなにか"
  },
  {
    "id": 24,
    "text": "学外の団体や他のサークルとのコラボはあるか"
  },
  {
    "id": 25,
    "text": "教養科目で充実している授業はなに?"
  },
  {
    "id": 26,
    "text": "もし先輩が今の知識を持ったまま1年生に戻ったら何をする"
  },
  {
    "id": 27,
    "text": "サークルの面白いイベントはなに?"
  },
  {
    "id": 28,
    "text": "サークルの伝統ある?"
  },
  {
    "id": 29,
    "text": "大学の成績は高い方が良い?"
  },
  {
    "id": 30,
    "text": "大学の夏/冬休みは何をした"
  },
  {
    "id": 31,
    "text": "大学で勉強をする時に集中できる場所はどこですか?"
  },
  {
    "id": 32,
    "text": "他大学や他学部の友達はどうやって作る?"
  },
  {
    "id": 33,
    "text": "上級生は1年生にどんなことを期待している?"
  },
  {
    "id": 34,
    "text": "全休はつくっているか"
  },
  {
    "id": 35,
    "text": "大学生なら絶対に入れておきたいアプリは?"
  },
  {
    "id": 36,
    "text": "ボランティア活動を通じて1番成長した能力はなんですか"
  },
  {
    "id": 37,
    "text": "レポートを書く時のコツはなに?"
  },
  {
    "id": 38,
    "text": "参考文献の探し方を教えて"
  },
  {
    "id": 39,
    "text": "1年生が楽しい学生生活を送るためのアドバイスをください"
  },
  {
    "id": 40,
    "text": "空きコマには何をしていますか?"
  },
  {
    "id": 41,
    "text": "テスト期間ってどれくらい勉強してますか？"
  },
  {
    "id": 42,
    "text": "オンライン授業と対面授業はどちらが好きですか?"
  },
  {
    "id": 43,
    "text": "バイト代って月にいくら稼いでますか?"
  },
  {
    "id": 44,
    "text": "テスト期間ってバイトのシフトはどうしていますか？"
  },
  {
    "id": 45,
    "text": "上級生の中でいちばんギャップがあるのは誰?"
  },
  {
    "id": 46,
    "text": "サークル活動で1番キツかったことはなに?"
  },
  {
    "id": 47,
    "text": "同期のメンバーと仲良くなったきっかけはなに?"
  },
  {
    "id": 48,
    "text": "他のサークルや部活と掛け持ちしてる先輩はいますか?"
  },
  {
    "id": 49,
    "text": "最近YouTubeやTiktokでハマっているインフルエンサーは誰ですか？"
  },
  {
    "id": 50,
    "text": "服はどこで買っていますか?"
  },
  {
    "id": 51,
    "text": "サークルに入ってから変わったことはなんですか?"
  },
  {
    "id": 52,
    "text": "今一番欲しいものはなんですか?"
  },
  {
    "id": 53,
    "text": "1年生の時の失敗を教えてください"
  },
  {
    "id": 54,
    "text": "ゼミ選びで大事なことってなんですか?"
  },
  {
    "id": 55,
    "text": "文化祭って参加した方がいいですか?"
  },
  {
    "id": 56,
    "text": "レポートって締切のどれくらい前からはじめますか?"
  },
  {
    "id": 57,
    "text": "平日の夜、バイト終わりには何をしていますか?"
  },
  {
    "id": 58,
    "text": "先輩は今の学部を選んでどんな風に思ってますか?"
  },
  {
    "id": 59,
    "text": "サークル室は1年生1人で行っても大丈夫ですか?"
  },
  {
    "id": 60,
    "text": "サークルを続けるモチベーションはなんですか?"
  },
  {
    "id": 61,
    "text": "1年生の意見はどれだけサークル内で通りますか？"
  },
  {
    "id": 62,
    "text": "ボランティアが「偽善」だと思われることについてどう思いますか"
  },
  {
    "id": 63,
    "text": "ボランティア中に予期せぬことが起きたことはありますか?"
  },
  {
    "id": 64,
    "text": "サークルのご飯会や飲み会はどんな雰囲気ですか?"
  },
  {
    "id": 65,
    "text": "サークルの入会費は何に使用されていますか?"
  },
  {
    "id": 66,
    "text": "ボランティアってガクチカになりますか?"
  },
  {
    "id": 67,
    "text": "教科書って中古でも大丈夫ですか?"
  },
  {
    "id": 68,
    "text": "同級生と仲良くなるにはどうすればいいですか?"
  },
  {
    "id": 69,
    "text": "面白かった授業を教えてください"
  },
  {
    "id": 70,
    "text": "履修登録を失敗しないコツは?"
  },
  {
    "id": 71,
    "text": "車の免許はいつとるのがおすすめですか?"
  },
  {
    "id": 72,
    "text": "話題に困ったときどんなことを話しますか?"
  },
  {
    "id": 73,
    "text": "大学生ならではのおすすめの「学割」を教えてください"
  },
  {
    "id": 74,
    "text": "おすすめのアルバイトはなんですか?"
  },
  {
    "id": 75,
    "text": "ボランティア先の人とはどんなことを話していますか?"
  },
  {
    "id": 76,
    "text": "サークル室では何ができますか?"
  },
  {
    "id": 77,
    "text": "留学に行く人はいますか?"
  },
  {
    "id": 78,
    "text": "楽しかったボランティアはなんですか?"
  },
  {
    "id": 79,
    "text": "通学時間は何をしていますか?"
  },
  {
    "id": 80,
    "text": "サークル活動外で同級生と関わることはありますか?"
  },
  {
    "id": 81,
    "text": "ストレスのリフレッシュ方はなんですか?"
  },
  {
    "id": 82,
    "text": "好きな漫画やアニメはなんですか?"
  }
];

const STORAGE_KEY = "aid-together-question-gacha-used-v1";
let usedIds = loadUsedIds();
let spinning = false;

const machineWrap = document.getElementById("machineWrap");
const capsule = document.getElementById("capsule");
const gachaButton = document.getElementById("gachaButton");
const buttonText = document.getElementById("buttonText");
const questionCard = document.getElementById("questionCard");
const questionNumber = document.getElementById("questionNumber");
const questionText = document.getElementById("questionText");
const remaining = document.getElementById("remaining");
const finish = document.getElementById("finish");
const resetButton = document.getElementById("resetButton");
const listButton = document.getElementById("listButton");
const listModal = document.getElementById("listModal");
const closeModal = document.getElementById("closeModal");
const modalBackdrop = document.getElementById("modalBackdrop");
const questionList = document.getElementById("questionList");
const toast = document.getElementById("toast");

function loadUsedIds() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed.filter(Number.isInteger) : [];
  } catch {
    return [];
  }
}

function saveUsedIds() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(usedIds));
  } catch {
    showToast("この端末では進行状況を保存できません。");
  }
}

function remainingQuestions() {
  return QUESTIONS.filter(q => !usedIds.includes(q.id));
}

function updateStatus() {
  const count = remainingQuestions().length;
  remaining.textContent = `残り ${count} 問`;
  if (count === 0 && !spinning) {
    finish.classList.remove("hidden");
    gachaButton.classList.add("hidden");
  } else {
    finish.classList.add("hidden");
    gachaButton.classList.remove("hidden");
  }
}

function resetCapsule() {
  capsule.className = "capsule capsule-hidden";
  capsule.src = "assets/capsule-closed.png";
}

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function spin() {
  if (spinning) return;

  const pool = remainingQuestions();
  if (pool.length === 0) {
    updateStatus();
    return;
  }

  spinning = true;
  gachaButton.disabled = true;
  buttonText.textContent = "ガチャを回しています…";
  questionCard.classList.remove("visible");
  machineWrap.classList.remove("shake");
  resetCapsule();

  // 0.0–0.8s: machine shake
  void machineWrap.offsetWidth;
  machineWrap.classList.add("shake");
  capsule.classList.remove("capsule-hidden");
  await wait(800);

  // 0.8–1.8s: capsule falls inside
  capsule.className = "capsule fall";
  await wait(1000);

  // 1.8–2.32s: capsule exits
  capsule.className = "capsule exit";
  await wait(520);

  // 2.32–2.87s: small bounce
  capsule.className = "capsule bounce";
  await wait(550);

  // 2.87–3.52s: move to center
  capsule.className = "capsule to-center";
  await wait(650);

  // 3.52s: open
  capsule.src = "assets/capsule-open.png";
  capsule.className = "capsule open";
  await wait(450);

  const selected = pool[Math.floor(Math.random() * pool.length)];
  usedIds.push(selected.id);
  saveUsedIds();

  questionNumber.textContent = `QUESTION ${String(selected.id).padStart(2, "0")}`;
  questionText.textContent = selected.text;
  questionCard.classList.add("visible");

  await wait(350);

  capsule.classList.add("capsule-hidden");
  capsule.classList.remove("open");
  machineWrap.classList.remove("shake");

  spinning = false;
  buttonText.textContent = "もう一度ガチャを回す";
  gachaButton.disabled = false;
  updateStatus();
}

function resetAll() {
  usedIds = [];
  saveUsedIds();
  questionNumber.textContent = "";
  questionText.textContent = "ガチャを回して質問を引いてみよう！";
  questionCard.classList.remove("visible");
  buttonText.textContent = "ガチャを回す";
  gachaButton.disabled = false;
  finish.classList.add("hidden");
  resetCapsule();
  updateStatus();
  showToast("質問をリセットしました！");
}

function openList() {
  questionList.innerHTML = QUESTIONS.map(q => `
    <li><span>${escapeHtml(q.text)}</span></li>
  `).join("");
  listModal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function closeList() {
  listModal.classList.add("hidden");
  document.body.style.overflow = "";
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

let toastTimer;
function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.remove("hidden");
  toastTimer = setTimeout(() => toast.classList.add("hidden"), 2200);
}

gachaButton.addEventListener("click", spin);
resetButton.addEventListener("click", resetAll);
listButton.addEventListener("click", openList);
closeModal.addEventListener("click", closeList);
modalBackdrop.addEventListener("click", closeList);
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeList();
});

updateStatus();
