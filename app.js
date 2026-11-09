const GROUPS = [
  { id: "all", name: "全部" },
  { id: "fuel", name: "燃煤" },
  { id: "main", name: "主机" },
  { id: "cw", name: "循环水" },
  { id: "elec", name: "电气" },
  { id: "yard", name: "水务厂前" },
];

const GROUP_NAME = {
  fuel: "燃煤系统",
  main: "主机",
  cw: "循环水",
  elec: "电气",
  yard: "水务与厂前",
};

// ax/ay 落在构筑物上，lx/ly 是标牌左上角，单位都是画面百分比。
const ITEMS = [
  {
    id: "conveyor",
    name: "输煤栈桥",
    group: "fuel",
    ax: 16.0, ay: 37.6, lx: 0.8, ly: 24.5,
    lead: "厂外原煤进厂的封闭皮带走廊。",
    text: "左侧伸出厂区的浅灰色长廊是输煤栈桥，里面是带式输送机，把来煤送进圆形煤场。",
  },
  {
    id: "transfer",
    name: "转运站",
    group: "fuel",
    ax: 16.8, ay: 64.2, lx: 0.6, ly: 71,
    lead: "煤场边缘的皮带转向点。",
    text: "圆形煤场西侧的小厂房。皮带在这里转向、抬头，再进入煤场。",
  },
  {
    id: "yard",
    name: "圆形煤场",
    group: "fuel",
    ax: 24.8, ay: 56.5, lx: 0.8, ly: 48,
    lead: "蓝顶白墙的封闭储煤场。",
    text: "穹顶加圆形挡墙的封闭煤场，用来堆存入炉煤，并挡住雨水和煤尘。",
  },
  {
    id: "ash",
    name: "灰库",
    group: "fuel",
    ax: 36.2, ay: 53.5, lx: 21.5, ly: 41.5,
    lead: "烟囱西侧的干灰筒仓。",
    text: "紧挨烟囱的一排筒仓。除尘器收下的干灰存在这里，再装车外运或综合利用。",
  },
  {
    id: "boiler1",
    name: "1号锅炉本体",
    group: "main",
    ax: 50.8, ay: 58.6, lx: 37.2, ly: 64.5,
    lead: "靠烟囱一侧的钢结构锅炉。",
    text: "靠烟囱这一侧的钢结构厂房，就是运行画面里标的「锅炉本体」。煤粉在炉膛燃烧，把水变成过热蒸汽。",
  },
  {
    id: "boiler2",
    name: "2号锅炉本体",
    group: "main",
    ax: 58.2, ay: 53.0, lx: 73.2, ly: 25,
    lead: "靠 2 号冷却塔一侧的锅炉。",
    text: "2 号冷却塔脚下那栋蓝顶钢架厂房，是并列的另一台锅炉。",
  },
  {
    id: "turbine",
    name: "汽机房",
    group: "main",
    ax: 62.5, ay: 71.5, lx: 45.5, ly: 83.5,
    lead: "汽轮发电机所在的长厂房。",
    text: "主厂房前方的长条蓝顶厂房。两台机组的汽轮机和发电机都在这里，蒸汽在此做功发电。运行画面里的「机组」指的就是这一部分。",
  },
  {
    id: "stack",
    name: "烟囱",
    group: "main",
    ax: 40.3, ay: 32.0, lx: 23.5, ly: 16.5,
    lead: "烟气经处理后由此排放。",
    text: "锅炉烟气经过除尘、脱硫后从这里排出。筒身上的蓝白环是航空警示色。",
  },
  {
    id: "pipe",
    name: "循环水管道",
    group: "cw",
    ax: 42.0, ay: 73.2, lx: 10.5, ly: 84.5,
    lead: "连接冷却塔和凝汽器的蓝色大管。",
    text: "场地上横穿的蓝色大管。循环水沿这里在冷却塔和汽机房凝汽器之间往返。",
  },
  {
    id: "aux",
    name: "辅机厂房",
    group: "cw",
    ax: 47.6, ay: 49.4, lx: 40.6, ly: 55.2,
    lead: "冷却塔与锅炉之间的低矮厂房。",
    text: "两座冷却塔和锅炉之间的一排矮厂房。这个位置通常布置循环水泵房、空压机房一类辅机。",
  },
  {
    id: "ct1",
    name: "1号冷却塔",
    group: "cw",
    ax: 43.6, ay: 18.5, lx: 33.2, ly: 1.2,
    lead: "左侧自然通风冷却塔。",
    text: "左侧这座双曲线冷却塔。循环水在塔内淋下，靠空气把热量带走，再送回凝汽器。",
  },
  {
    id: "ct2",
    name: "2号冷却塔",
    group: "cw",
    ax: 61.0, ay: 30.0, lx: 73.5, ly: 9.5,
    lead: "右侧自然通风冷却塔。",
    text: "右侧另一座冷却塔，给 2 号机组的循环水降温。塔型与运行画面里标出的冷却塔相同。",
  },
  {
    id: "switch",
    name: "升压站",
    group: "elec",
    ax: 68.4, ay: 74.7, lx: 73.5, ly: 87.2,
    lead: "主变和出线构架。",
    text: "汽机房前方的白色构架和设备，就是运行画面里的「升压站」。主变压器把发电机电压升高后送入电网。",
  },
  {
    id: "chem",
    name: "化水车间",
    group: "yard",
    ax: 72.3, ay: 63.0, lx: 77.6, ly: 67.4,
    lead: "右侧成排的蓝色水处理池。",
    text: "厂区东侧成排的蓝色水池，做沉淀、过滤，制备锅炉用的补给水。",
  },
  {
    id: "tank",
    name: "除盐水箱",
    group: "yard",
    ax: 83.8, ay: 60.2, lx: 84.2, ly: 43.5,
    lead: "存放锅炉补给水的立式罐。",
    text: "化水池北侧的立式储罐，用来存放已经制成的除盐水。",
  },
  {
    id: "office",
    name: "综合办公楼",
    group: "yard",
    ax: 92.2, ay: 67.2, lx: 82.8, ly: 52.2,
    lead: "带横窗的多层生产办公楼。",
    text: "厂前区带横窗的多层楼，生产和运行人员在这里办公。",
  },
  {
    id: "store",
    name: "材料库",
    group: "yard",
    ax: 85.6, ay: 78.6, lx: 90.2, ly: 86.5,
    lead: "办公楼前的低矮库房。",
    text: "综合办公楼前面的低矮库房，存放检修备件和消耗材料。",
  },
];

const scene = document.getElementById("scene");
const leaders = document.getElementById("leaders");
const pins = document.getElementById("pins");
const tags = document.getElementById("tags");
const detail = document.getElementById("detail");
const filters = document.getElementById("filters");
const list = document.getElementById("list");

let group = "all";
let activeId = null;
let hoverId = null;

function visible(item) {
  return group === "all" || item.group === group;
}

function isCompact() {
  return window.matchMedia("(max-width: 860px)").matches;
}

function showTag(item) {
  if (!visible(item)) return false;
  if (!isCompact()) return true;
  const focus = focusId();
  return Boolean(focus) && item.id === focus;
}

function focusId() {
  return hoverId || activeId;
}

function mount() {
  for (const item of ITEMS) {
    const pin = document.createElement("button");
    pin.type = "button";
    pin.className = "pin";
    pin.dataset.id = item.id;
    pin.style.left = item.ax + "%";
    pin.style.top = item.ay + "%";
    pin.setAttribute("aria-label", item.name);
    pins.appendChild(pin);

    const tag = document.createElement("button");
    tag.type = "button";
    tag.className = "tag";
    tag.dataset.id = item.id;
    tag.style.left = item.lx + "%";
    tag.style.top = item.ly + "%";
    tag.innerHTML = '<i class="gem" aria-hidden="true"></i><span></span>';
    tag.querySelector("span").textContent = item.name;
    tags.appendChild(tag);
  }

  for (const g of GROUPS) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "filter";
    button.dataset.group = g.id;
    button.textContent = g.name;
    button.setAttribute("role", "tab");
    filters.appendChild(button);
  }

  scene.addEventListener("click", onPick);
  scene.addEventListener("mouseover", onOver);
  scene.addEventListener("mouseout", onOut);
  filters.addEventListener("click", onFilter);
  list.addEventListener("click", onPick);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      activeId = null;
      paint();
    }
  });

  const plant = document.getElementById("plant");
  if (plant.complete) requestAnimationFrame(draw);
  else plant.addEventListener("load", () => requestAnimationFrame(draw));
  new ResizeObserver(() => requestAnimationFrame(draw)).observe(scene);
  window.matchMedia("(max-width: 860px)").addEventListener("change", paint);
  paint();
}

function onPick(event) {
  const node = event.target.closest("[data-id]");
  if (!node) {
    if (event.currentTarget === scene) {
      activeId = null;
      paint();
    }
    return;
  }
  if (!scene.contains(node) && !list.contains(node)) return;
  activeId = activeId === node.dataset.id ? null : node.dataset.id;
  hoverId = null;
  paint();
}

function onOver(event) {
  const node = event.target.closest("[data-id]");
  const next = node ? node.dataset.id : null;
  if (next === hoverId) return;
  hoverId = next;
  paint();
}

function onOut(event) {
  const node = event.target.closest("[data-id]");
  if (!node) return;
  const next = event.relatedTarget && event.relatedTarget.closest
    ? event.relatedTarget.closest("[data-id]")
    : null;
  if (next && next.dataset.id === node.dataset.id) return;
  hoverId = null;
  paint();
}

function onFilter(event) {
  const button = event.target.closest("[data-group]");
  if (!button) return;
  group = button.dataset.group;
  if (activeId && !visible(ITEMS.find((item) => item.id === activeId))) activeId = null;
  paint();
}

function paint() {
  const focus = focusId();
  scene.classList.toggle("is-focus", Boolean(focus));

  for (const item of ITEMS) {
    const showPin = visible(item);
    const showLabel = showTag(item);
    const on = item.id === focus;
    for (const node of scene.querySelectorAll(`[data-id="${item.id}"]`)) {
      const label = node.classList.contains("tag");
      node.hidden = label ? !showLabel : !showPin;
      node.classList.toggle("is-on", on && (label ? showLabel : showPin));
      if (label) node.setAttribute("aria-pressed", String(on));
    }
  }

  filters.querySelectorAll(".filter").forEach((button) => {
    const on = button.dataset.group === group;
    button.classList.toggle("is-on", on);
    button.setAttribute("aria-selected", String(on));
  });

  renderList();
  renderDetail();
  requestAnimationFrame(draw);
}

function renderList() {
  list.replaceChildren();
  for (const item of ITEMS) {
    if (!visible(item)) continue;
    const row = document.createElement("button");
    row.type = "button";
    row.className = "row";
    row.dataset.id = item.id;
    row.classList.toggle("is-on", item.id === (hoverId || activeId));
    const name = document.createElement("strong");
    name.textContent = item.name;
    const lead = document.createElement("span");
    lead.textContent = item.lead;
    row.append(name, lead);
    list.appendChild(row);
  }
}

function renderDetail() {
  const item = ITEMS.find((entry) => entry.id === (hoverId || activeId));
  detail.replaceChildren();
  const kicker = document.createElement("p");
  kicker.className = "kicker";
  const title = document.createElement("h2");
  const body = document.createElement("p");
  if (!item) {
    kicker.textContent = "设备标牌";
    title.textContent = "点一处看它是什么";
    body.textContent = "蓝菱形标牌和运行总览画面是同一种标法。标牌指着模型上的构筑物，右侧可以按系统筛选。";
  } else {
    kicker.textContent = GROUP_NAME[item.group];
    title.textContent = item.name;
    body.textContent = item.text;
  }
  detail.append(kicker, title, body);
}

function edgePoint(rect, ax, ay) {
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  const dx = ax - cx;
  const dy = ay - cy;
  if (dx === 0 && dy === 0) return { x: cx, y: cy };
  const scaleX = dx !== 0 ? (rect.width / 2) / Math.abs(dx) : Infinity;
  const scaleY = dy !== 0 ? (rect.height / 2) / Math.abs(dy) : Infinity;
  const scale = Math.min(scaleX, scaleY);
  return { x: cx + dx * scale, y: cy + dy * scale };
}

function draw() {
  const width = scene.clientWidth;
  const height = scene.clientHeight;
  if (!width || !height) return;
  leaders.setAttribute("viewBox", `0 0 ${width} ${height}`);
  leaders.setAttribute("width", String(width));
  leaders.setAttribute("height", String(height));
  const focus = focusId();
  const stroke = Math.max(1.15, width / 820);
  const sceneBox = scene.getBoundingClientRect();
  const parts = [];
  for (const item of ITEMS) {
    if (!visible(item)) continue;
    const tag = tags.querySelector(`[data-id="${item.id}"]`);
    if (!tag || tag.hidden) continue;
    const box = tag.getBoundingClientRect();
    const rect = {
      left: box.left - sceneBox.left,
      top: box.top - sceneBox.top,
      width: box.width,
      height: box.height,
    };
    const ax = (item.ax / 100) * width;
    const ay = (item.ay / 100) * height;
    const end = edgePoint(rect, ax, ay);
    const on = item.id === focus;
    const color = on ? "#e7f7ff" : "#7fd4ff";
    const opacity = focus && !on ? 0.12 : 0.95;
    const widthNow = on ? stroke * 1.8 : stroke;
    parts.push(
      `<line x1="${ax.toFixed(1)}" y1="${ay.toFixed(1)}" x2="${end.x.toFixed(1)}" y2="${end.y.toFixed(1)}" stroke="${color}" stroke-width="${widthNow.toFixed(2)}" stroke-linecap="round" opacity="${opacity}" />`
    );
  }
  leaders.innerHTML = parts.join("");
}

mount();
