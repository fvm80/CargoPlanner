// ----------------- Конфигурация и данные -----------------
const SCALE_FACTOR = 0.5; // 1 дюйм = 0.5 px
const triangleSize = 5;
const P_ADJ = triangleSize * SCALE_FACTOR;
const LOCK_LINE_LENGTH_PX = 6;
const SVG_CANVAS_ID = 'cargo-deck-svg';

const SNAP_RADIUS_IN = 12; // радиус примагничивания в дюймах

const R_POSITIONS_INPUT = [
    "531,5 - 727,5", "551,625 - 747,625", "571,75 - 767,75", "591,875 - 787,875",
    "612 - 808", "632,125 - 828,125", "652,25 - 848,25", "672,375 - 868,375",
    "692,5 - 888,5", "712,625 - 908,625", "732,75 - 928,75", "752,875 - 948,875",
    "773 - 969", "793,125 - 989,125", "813,25 - 1009,25", "833,375 - 1029,375",
    "853,5 - 1049,5", "873,625 - 1069,625", "893,75 - 1089,75", "913,875 - 1109,875",
    "934 - 1130", "954,125 - 1150,125", "974,25 - 1170,25", "994,375 - 1190,375",
    "1014,5 - 1210,5", "1034,625 - 1230,625", "1054,75 - 1250,75", "1074,875 - 1270,875",
    "1095 - 1291", "1115,125 - 1311,125", "1135,25 - 1331,25", "1155,375 - 1351,375",
    "1175,5 - 1371,5", "1195,625 - 1391,625", "1215,75 - 1411,75", "1235,875 - 1431,875",
    "1256 - 1452", "1276,125 - 1472,125", "1296,25 - 1492,25", "1316,375 - 1512,375",
    "1336,5 - 1532,5", "1356,625 - 1552,625", "1376,75 - 1572,75", "1396,875 - 1592,875",
    "1417 - 1613", "1437,125 - 1633,125", "1457,25 - 1653,25", "1477,375 - 1673,375",
    "1497,5 - 1693,5", "1517,625 - 1713,625", "1537,75 - 1733,75", "1557,875 - 1753,875",
    "1578 - 1774", "1598,125 - 1794,125", "1618,25 - 1814,25", "1638,375 - 1834,375",
    "1658,5 - 1854,5", "1678,625 - 1874,625", "1698,75 - 1894,75", "1718,875 - 1914,875",
    "1739 - 1935", "1759,125 - 1955,125", "1779,25 - 1975,25", "1799,375 - 1995,375",
    "1819,5 - 2015,5", "1839,625 - 2035,625", "1859,75 - 2055,75", "1879,875 - 2075,875",
    "1900 - 2096", "1920,125 - 2116,125", "1940,25 - 2136,25", "1960,375 - 2156,375",
    "1980,5 - 2176,5", "2000,625 - 2196,625", "2020,75 - 2216,75"
];

const G_POSITIONS_INPUT = [
    "530,375 - 768,875", "550,5 - 789", "570,625 - 809,125", "590,75 - 829,25",
    "610,875 - 849,375", "631 - 869,5", "651,125 - 889,625", "671,25 - 909,75",
    "691,375 - 929,875", "711,5 - 950", "731,625 - 970,125", "751,75 - 990,25",
    "771,875 - 1010,375", "792 - 1030,5", "812,125 - 1050,625", "832,25 - 1070,75",
    "852,375 - 1090,875", "872,5 - 1111", "892,625 - 1131,125", "912,75 - 1151,25",
    "932,875 - 1171,375", "953 - 1191,5", "973,125 - 1211,625", "993,25 - 1231,75",
    "1013,375 - 1251,875", "1033,5 - 1272", "1053,625 - 1292,125", "1073,75 - 1312,25",
    "1093,875 - 1332,375", "1114 - 1352,5", "1134,125 - 1372,625", "1154,25 - 1392,75",
    "1174,375 - 1412,875", "1194,5 - 1433", "1214,625 - 1453,125", "1234,75 - 1473,25",
    "1254,875 - 1493,375", "1275 - 1513,5", "1295,125 - 1533,625", "1315,25 - 1553,75",
    "1335,375 - 1573,875", "1355,5 - 1594", "1375,625 - 1614,125", "1395,75 - 1634,25",
    "1415,875 - 1654,375", "1436 - 1674,5", "1456,125 - 1694,625", "1476,25 - 1714,75",
    "1496,375 - 1734,875", "1516,5 - 1755", "1536,625 - 1775,125", "1556,75 - 1795,25",
    "1576,875 - 1815,375", "1597 - 1835,5", "1617,125 - 1855,625", "1637,25 - 1875,75",
    "1657,375 - 1895,875", "1677,5 - 1916", "1697,625 - 1936,125", "1717,75 - 1956,25",
    "1737,875 - 1976,375", "1758 - 1996,5", "1778,125 - 2016,625", "1798,25 - 2036,75",
    "1818,375 - 2056,875", "1838,5 - 2077", "1858,625 - 2097,125", "1878,75 - 2117,25",
    "1898,875 - 2137,375", "1919 - 2157,5", "1939,125 - 2177,625", "1959,25 - 2197,75",
    "1979,375 - 2217,875"
];

const deckData = {
    startDatum: 525.5, endDatum: 2217, totalWidth: 196, centerDividerWidth: 10, palletAreaWidth: 93,
    sections: {
        C: [525.5, 650.5], D: [651.5, 776.5], E: [777.5, 902.5], F: [903.5, 1028.5],
        G: [1029.5, 1154.5], H: [1155.5, 1280.5], J: [1281.5, 1406.5], K: [1407.5, 1532.5],
        L: [1533.5, 1658.5], M: [1659.5, 1784.5], P: [1785.5, 1910.5], Q: [1911, 1966],
        R: [1967, 2092], S: [2093, 2218]
    },
    lockStart: 549, lockEnd: 2199.25, lockStep: 20.125
};

const containerTypes = {
    M_SIZE: { id: 'M_SIZE_TEMPLATE', label: 'M', width: 96, length: 125, isSectionBased: true, possiblePositions: [], description: 'M-size (125x96), привязан к секциям.' },
    R_SIZE: { id: 'R_SIZE_TEMPLATE', label: 'R(16ft)', width: 96, length: 196, isSectionBased: false, possiblePositions: [], lockPattern: { xStep: 20.125, xEdge: 17.5, yStep:20.125, yEdge:7.75 }, description: 'R-size (196x96) - по замкам' },
    G_SIZE: { id: 'G_SIZE_TEMPLATE', label: 'G(20ft)', width: 96, length: 238.5, isSectionBased: false, possiblePositions: [], lockPattern: { xStep:20.125, xEdge:18.625, yStep:null, yEdge:null }, description:'G-size (238.5x96) - только вдоль' }
};

// ----------------- Состояние -----------------
let occupiedPositions = [];
let dragState = { isDragging:false, originalElement:null, clonedElement:null, offsetX:0, offsetY:0, containerType:null, currentYPos:'L' };

// ----------------- Вспомогательные функции -----------------
function toSvgX(datumX){ return (datumX - deckData.startDatum) * SCALE_FACTOR; }
function toSvg(inches){ return inches * SCALE_FACTOR; }
function createSvgElement(tag, attrs={}){ const el = document.createElementNS('http://www.w3.org/2000/svg', tag); for(const k in attrs) el.setAttribute(k, attrs[k]); return el; }
function getDeckSvg(){ return document.getElementById(SVG_CANVAS_ID); }

function parsePositionsInputs(){
    R_POSITIONS_INPUT.map(s=>s.split(' - ').map(x=>Number(x.replace(',', '.')))).forEach(([start,end])=>{
        containerTypes.R_SIZE.possiblePositions.push({ type:'R', yPos:'L', startDatum:start, endDatum:end });
        containerTypes.R_SIZE.possiblePositions.push({ type:'R', yPos:'R', startDatum:start, endDatum:end });
    });
    G_POSITIONS_INPUT.map(s=>s.split(' - ').map(x=>Number(x.replace(',', '.')))).forEach(([start,end])=>{
        containerTypes.G_SIZE.possiblePositions.push({ type:'G', yPos:'L', startDatum:start, endDatum:end });
        containerTypes.G_SIZE.possiblePositions.push({ type:'G', yPos:'R', startDatum:start, endDatum:end });
    });
}

function calculateMPositions(){
    const M_LENGTH = containerTypes.M_SIZE.length;
    for(const [key,[start,end]] of Object.entries(deckData.sections)){
        if(end - start >= M_LENGTH - 1){ // простая проверка
            containerTypes.M_SIZE.possiblePositions.push({ type:'M', yPos:'L', startDatum:start, endDatum:start + M_LENGTH });
            containerTypes.M_SIZE.possiblePositions.push({ type:'M', yPos:'R', startDatum:start, endDatum:start + M_LENGTH });
        }
    }
}

function calculateAndStorePositions(){ parsePositionsInputs(); calculateMPositions(); }

function checkCollision(newPos){
    for(const pos of occupiedPositions){
        if(pos.yPos !== newPos.yPos) continue;
        if(newPos.startDatum < pos.endDatum && newPos.endDatum > pos.startDatum) return true;
    }
    return false;
}

// вернуть ближайшую позицию по передней кромке (nose/left-edge) в дюймах
function findNearestFreePositionByNose(containerData, frontDatum){
    const positions = containerData.possiblePositions;
    let nearest = null; let minDist = Infinity;
    const SNAP = SNAP_RADIUS_IN;
    for(const p of positions){
        if(p.yPos !== dragState.currentYPos) continue;
        const dist = Math.abs(p.startDatum - frontDatum);
        if(dist <= SNAP && dist < minDist){
            const temp = { startDatum: p.startDatum, endDatum: p.endDatum, yPos: p.yPos, type: p.type };
            if(!checkCollision(temp)){
                minDist = dist; nearest = p;
            }
        }
    }
    return nearest;
}

// ----------------- Отрисовка шаблонов и палубы -----------------
function drawContainerTemplate(data){
    const lengthPx = toSvg(data.length); const widthPx = toSvg(data.width);
    const wrapper = document.createElement('div'); wrapper.style.marginRight='12px'; wrapper.style.padding='6px';
    wrapper.innerHTML = `<div style="font-weight:700">${data.label}</div><div style="font-size:12px">${data.description}</div>`;
    const svg = createSvgElement('svg',{ id:data.id, width:lengthPx.toFixed(1), height:widthPx.toFixed(1), viewBox:`0 0 ${lengthPx} ${widthPx}`, class:'container-svg' });
    svg.appendChild(createSvgElement('rect',{ x:0, y:0, width:lengthPx, height:widthPx, class:'container-base' }));
    svg.appendChild(createSvgElement('text',{ x:lengthPx/2, y:widthPx/2, dy:'0.3em', class:'container-label' })).textContent = data.label;
    if(data.lockPattern) drawInternalContainerLocks(svg, data);
    wrapper.appendChild(svg); document.getElementById('templates-container').appendChild(wrapper);
}

function drawContainerTemplates(){ for(const k in containerTypes) drawContainerTemplate(containerTypes[k]); }

function drawInternalContainerLocks(svg, data){ const {length, width, lockPattern} = data; const lengthPx = toSvg(length); const widthPx = toSvg(width);
    if(lockPattern.xStep && lockPattern.xEdge!=null){ let cur = lockPattern.xEdge; while(cur <= length - lockPattern.xEdge + lockPattern.xStep/2){ const x = toSvg(cur); svg.appendChild(createSvgElement('line',{ x1:x, y1:0, x2:x, y2:LOCK_LINE_LENGTH_PX, class:'container-lock-point' })); svg.appendChild(createSvgElement('line',{ x1:x, y1:widthPx, x2:x, y2:widthPx-LOCK_LINE_LENGTH_PX, class:'container-lock-point' })); cur += lockPattern.xStep; } }
    if(lockPattern.yStep && lockPattern.yEdge!=null){ let cur=lockPattern.yEdge; while(cur <= width - lockPattern.yEdge + lockPattern.yStep/2){ const y = toSvg(cur); svg.appendChild(createSvgElement('line',{ x1:0, y1:y, x2:LOCK_LINE_LENGTH_PX, y2:y, class:'container-lock-point' })); svg.appendChild(createSvgElement('line',{ x1:lengthPx, y1:y, x2:lengthPx-LOCK_LINE_LENGTH_PX, y2:y, class:'container-lock-point' })); cur += lockPattern.yStep; } }
}

function drawCargoDeck(){
    const container = document.getElementById('cargo-deck-container'); container.innerHTML = '';
    const SVG_HEIGHT_INTERNAL = deckData.totalWidth * SCALE_FACTOR;
    const DECK_LENGTH_INCHES = deckData.sections.S[1] - deckData.sections.C[0];
    const SVG_WIDTH = DECK_LENGTH_INCHES * SCALE_FACTOR; const SVG_HEIGHT_TOTAL = SVG_HEIGHT_INTERNAL + 2*P_ADJ;
    const PALLET_AREA_PX = deckData.palletAreaWidth * SCALE_FACTOR; const DIVIDER_PX = deckData.centerDividerWidth * SCALE_FACTOR;
    const Y_CENTER_L = PALLET_AREA_PX/2; const Y_CENTER_R = PALLET_AREA_PX + DIVIDER_PX + PALLET_AREA_PX/2;

    const svg = createSvgElement('svg',{ id:SVG_CANVAS_ID, width:SVG_WIDTH.toFixed(1), height:SVG_HEIGHT_TOTAL.toFixed(1), viewBox:`0 ${-P_ADJ} ${SVG_WIDTH} ${SVG_HEIGHT_TOTAL}` });

    // sections
    for(const [key,[startX,endX]] of Object.entries(deckData.sections)){
        const x = toSvgX(startX); const width = (endX - startX)*SCALE_FACTOR; const halfW = width/2;
        svg.appendChild(createSvgElement('rect',{ x:x, y:0, width:width, height:PALLET_AREA_PX, class:'deck-section', title:`${key}L` }));
        svg.appendChild(createSvgElement('rect',{ x:x, y:PALLET_AREA_PX+DIVIDER_PX, width:width, height:PALLET_AREA_PX, class:'deck-section', title:`${key}R` }));
        svg.appendChild(createSvgElement('text',{ x:x+halfW, y:Y_CENTER_L, class:'section-label' })).textContent = key + 'L';
        svg.appendChild(createSvgElement('text',{ x:x+halfW, y:Y_CENTER_R, class:'section-label' })).textContent = key + 'R';
    }

    // divider
    svg.appendChild(createSvgElement('rect',{ x:0, y:PALLET_AREA_PX, width:SVG_WIDTH, height:DIVIDER_PX, class:'center-divider' }));

    // lock points along edges (visual only)
    let curLock = deckData.lockStart; while(curLock <= deckData.lockEnd + deckData.lockStep/2){ const x = toSvgX(curLock); svg.appendChild(createSvgElement('polygon',{ points:`${x},0 ${x+triangleSize},${-triangleSize} ${x-triangleSize},${-triangleSize}`, class:'lock-point' })); svg.appendChild(createSvgElement('polygon',{ points:`${x},${SVG_HEIGHT_INTERNAL} ${x+triangleSize},${SVG_HEIGHT_INTERNAL+triangleSize} ${x-triangleSize},${SVG_HEIGHT_INTERNAL+triangleSize}`, class:'lock-point' })); curLock += deckData.lockStep; }

    container.appendChild(svg);
    document.getElementById('legend').innerHTML = `Визуализируемая длина: ${DECK_LENGTH_INCHES.toFixed(1)} дюймов. Масштаб: 1 дюйм = ${SCALE_FACTOR} px.`;

    // redraw already occupied
    redrawAllPlacedCargo();
}

function drawCargoOnDeck(positionData, containerData){
    const deckSvg = getDeckSvg(); if(!deckSvg) return;
    const x = toSvgX(positionData.startDatum); const width = toSvg(containerData.length); const height = toSvg(containerData.width);
    const PALLET_AREA_PX = deckData.palletAreaWidth * SCALE_FACTOR; const DIVIDER_PX = deckData.centerDividerWidth * SCALE_FACTOR;
    const y = positionData.yPos === 'L' ? 0 : PALLET_AREA_PX + DIVIDER_PX;

    const rect = createSvgElement('rect', { x:x, y:y, width:width, height:height, id:positionData.id, class:'placed-cargo ' + containerData.id, title:`${containerData.label} ${positionData.yPos} @ ${positionData.startDatum.toFixed(2)}` });
    deckSvg.appendChild(rect);
    const text = createSvgElement('text', { x: x + width/2, y: y + height/2, dy:'0.3em', class:'cargo-label' }); text.textContent = containerData.label; deckSvg.appendChild(text);
}

function redrawAllPlacedCargo(){ const deckSvg = getDeckSvg(); if(!deckSvg) return; // remove previous placed cargo
    // remove previously drawn items (by class placed-cargo and cargo-label and pos-highlight)
    [...deckSvg.querySelectorAll('.placed-cargo, .cargo-label, .pos-highlight')].forEach(n=>n.remove());
    for(const pos of occupiedPositions){ const type = Object.values(containerTypes).find(c=>c.id === pos.templateId); const containerData = type || containerTypes[pos.type + '_SIZE'] || null; const cdata = containerData || { length: (pos.endDatum - pos.startDatum), width:96, id: pos.templateId || '' };
        drawCargoOnDeck(pos, cdata);
    }
}

function redrawAllPlacedCargo(){ const deckSvg = getDeckSvg(); if(!deckSvg) return; // remove previous placed cargo
    // remove previously drawn items (by class placed-cargo and cargo-label and pos-highlight)
    [...deckSvg.querySelectorAll('.placed-cargo, .cargo-label, .pos-highlight')].forEach(n=>n.remove());
    for(const pos of occupiedPositions){ const type = Object.values(containerTypes).find(c=>c.id === pos.templateId); const containerData = type || containerTypes[pos.type + '_SIZE'] || null; const cdata = containerData || { length: (pos.endDatum - pos.startDatum), width:96, id: pos.templateId || '' };
        drawCargoOnDeck(pos, cdata);
    }
}

// ----------------- Drag & Drop (новый) -----------------
function initDragAndDrop() {
    // Шаблоны контейнеров
    for (const key in containerTypes) {
        const template = containerTypes[key];
        const svg = document.getElementById(template.id);
        if (svg) {
            // мышь
            svg.addEventListener('mousedown', e => onDragStart(e, template));
            // тач
            svg.addEventListener('touchstart', e => onTouchStart(e, template), { passive: false });
            svg.style.userSelect = 'none';
        }
    }

    // На документе ловим движение и отпускание
    document.addEventListener('mousemove', onDragMove);
    document.addEventListener('mouseup', onDragEnd);
    document.addEventListener('touchmove', onTouchMove, { passive: false });
    document.addEventListener('touchend', onTouchEnd);
}

// ----------------- Mouse / Touch wrappers -----------------
function onTouchStart(e, templateData) {
    e.preventDefault();
    const touch = e.touches[0];
    onDragStart({ clientX: touch.clientX, clientY: touch.clientY, currentTarget: e.currentTarget, button: 0 }, templateData);
}

function onTouchMove(e) {
    e.preventDefault();
    const touch = e.touches[0];
    onDragMove({ clientX: touch.clientX, clientY: touch.clientY });
}

function onTouchEnd(e) {
    onDragEnd(e);
}

// ----------------- Core drag functions -----------------
function onDragStart(e, templateData, existingPos = null) {
    if (e.button !== 0) return;
    const deckSvg = getDeckSvg();
    if (!deckSvg) return;

    // Если это уже размещённый контейнер — временно удаляем его
    if (existingPos) {
        occupiedPositions = occupiedPositions.filter(p => p.id !== existingPos.id);
        redrawAllPlacedCargo();
    }

    const originalSvg = e.currentTarget;
    const clone = originalSvg.cloneNode(true);
    clone.removeAttribute('id');
    clone.classList.add('in-flight');
    clone.style.position = 'absolute';
    clone.style.pointerEvents = 'none';
    clone.style.opacity = 0.9;

    const rect = originalSvg.getBoundingClientRect();
    dragState.offsetX = e.clientX - rect.left;
    dragState.offsetY = e.clientY - rect.top;

    dragState.isDragging = true;
    dragState.clonedElement = clone;
    dragState.containerType = templateData;
    dragState.existingPos = existingPos; // сохраняем для редактирования

    clone.style.left = e.clientX - dragState.offsetX + 'px';
    clone.style.top = e.clientY - dragState.offsetY + 'px';
    document.body.appendChild(clone);
}

function onDragMove(e) {
    if (!dragState.isDragging || !dragState.clonedElement) return;

    const clone = dragState.clonedElement;
    clone.style.left = e.clientX - dragState.offsetX + 'px';
    clone.style.top = e.clientY - dragState.offsetY + 'px';

    const deckSvg = getDeckSvg();
    if (!deckSvg) return;

    const deckRect = deckSvg.getBoundingClientRect();
    const cloneRect = clone.getBoundingClientRect();
    const cloneCenterY = cloneRect.top + cloneRect.height / 2;
    const deckCenterY = deckRect.top + deckRect.height / 2;
    dragState.currentYPos = cloneCenterY < deckCenterY ? 'L' : 'R';

    const frontScreenX = cloneRect.left;
    const frontPxRelative = frontScreenX - deckRect.left;
    const frontDatum = frontPxRelative / SCALE_FACTOR + deckData.startDatum;

    const nearest = findNearestFreePositionByNose(dragState.containerType, frontDatum);
    highlightNearestPosition(nearest);
}

function onDragEnd(e) {
    if (!dragState.isDragging) return;

    const clone = dragState.clonedElement;
    dragState.isDragging = false;

    if (clone) {
        const deckSvg = getDeckSvg();
        const deckRect = deckSvg.getBoundingClientRect();
        const cloneRect = clone.getBoundingClientRect();
        const frontScreenX = cloneRect.left;
        const frontPxRelative = frontScreenX - deckRect.left;
        const frontDatum = frontPxRelative / SCALE_FACTOR + deckData.startDatum;
        const centerY = cloneRect.top + cloneRect.height / 2;

        if (frontPxRelative > 0 && frontPxRelative < deckRect.width && centerY > deckRect.top && centerY < deckRect.bottom) {
            const nearest = findNearestFreePositionByNose(dragState.containerType, frontDatum);
            if (nearest) {
                if (dragState.existingPos) {
                    // обновляем уже размещённый контейнер
                    dragState.existingPos.startDatum = nearest.startDatum;
                    dragState.existingPos.endDatum = nearest.endDatum;
                    dragState.existingPos.yPos = nearest.yPos;
                    occupiedPositions.push(dragState.existingPos);
                } else {
                    // новый контейнер
                    const newId = `cargo-${occupiedPositions.length + 1}`;
                    const placed = {
                        id: newId,
                        type: nearest.type,
                        templateId: dragState.containerType.id,
                        label: dragState.containerType.label,
                        yPos: nearest.yPos,
                        startDatum: nearest.startDatum,
                        endDatum: nearest.endDatum
                    };
                    occupiedPositions.push(placed);
                }
                redrawAllPlacedCargo();
            }
        }

        removeHighlights();
        clone.remove();
        dragState.clonedElement = null;
        dragState.containerType = null;
        dragState.existingPos = null;
    }
}

// ----------------- Добавление событий для уже размещённых контейнеров -----------------
function makePlacedContainersDraggable() {
    const deckSvg = getDeckSvg();
    if (!deckSvg) return;

    [...deckSvg.querySelectorAll('.placed-cargo')].forEach(rect => {
        const pos = occupiedPositions.find(p => p.id === rect.id);
        if (!pos) return;
        const containerData = Object.values(containerTypes).find(c => c.id === pos.templateId) || containerTypes[pos.type + '_SIZE'];

        rect.addEventListener('mousedown', e => onDragStart(e, containerData, pos));
        rect.addEventListener('touchstart', e => onTouchStart(e, containerData, pos), { passive: false });
    });
}

// ----------------- Обновление redrawAllPlacedCargo -----------------
function redrawAllPlacedCargo() {
    const deckSvg = getDeckSvg();
    if (!deckSvg) return;

    [...deckSvg.querySelectorAll('.placed-cargo, .cargo-label, .pos-highlight')].forEach(n => n.remove());

    for (const pos of occupiedPositions) {
        const type = Object.values(containerTypes).find(c => c.id === pos.templateId);
        const containerData = type || containerTypes[pos.type + '_SIZE'] || null;
        const cdata = containerData || { length: (pos.endDatum - pos.startDatum), width: 96, id: pos.templateId || '' };
        drawCargoOnDeck(pos, cdata);
    }

    // после перерисовки — делаем контейнеры снова draggable
    makePlacedContainersDraggable();
}


// ----------------- Highlight helpers -----------------
function highlightNearestPosition(pos){ const deckSvg = getDeckSvg(); if(!deckSvg) return; removeHighlights(); if(!pos) return; const x = toSvgX(pos.startDatum); const width = toSvg(pos.endDatum - pos.startDatum); const PALLET_AREA_PX = deckData.palletAreaWidth * SCALE_FACTOR; const DIVIDER_PX = deckData.centerDividerWidth * SCALE_FACTOR; const y = pos.yPos === 'L' ? 0 : PALLET_AREA_PX + DIVIDER_PX; const rect = createSvgElement('rect', { x:x, y:y, width:width, height:toSvg(96), class:'pos-highlight' }); deckSvg.appendChild(rect); }
function removeHighlights(){ const deckSvg = getDeckSvg(); if(!deckSvg) return; [...deckSvg.querySelectorAll('.pos-highlight')].forEach(n=>n.remove()); }

// ----------------- UI Actions -----------------
function exportPlaced(){ const data = JSON.stringify(occupiedPositions, null, 2); const blob = new Blob([data], {type:'application/json'}); const url = URL.createObjectURL(blob); const a = document.createElement('a'); a.href = url; a.download = 'placed_positions.json'; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url); }
function clearPlaced(){ occupiedPositions = []; redrawAllPlacedCargo(); }

// ----------------- Инициализация -----------------
document.addEventListener('DOMContentLoaded', ()=>{
    calculateAndStorePositions();
    drawCargoDeck();
    drawContainerTemplates();
    initDragAndDrop();

    const exportBtn = document.getElementById('export-btn');
    if(exportBtn) exportBtn.addEventListener('click', exportPlaced);
    const clearBtn = document.getElementById('clear-btn');
    if(clearBtn) clearBtn.addEventListener('click', clearPlaced);

    const snapEl = document.getElementById('snap-value');
    if(snapEl) snapEl.textContent = SNAP_RADIUS_IN;
});








