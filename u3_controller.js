for (var i = 1; i <= 10; i++) {
  const addSubject = JSON.parse(localStorage.getItem(`addSubject${i}`));
  const delSubject = JSON.parse(localStorage.getItem(`delSubject${i}`));
  if (addSubject.order >= 1) {
    create_tr(addSubject);
  }
  if (delSubject.order >= 1) {
    create_tr2(delSubject);
  }
}

function create_tr(addSubject) {
  table_id = document.getElementById("tb1");
  const row = table_id.insertRow(table_id.rows.length);
  for (var c = 1; c <= 5; c++) {
    let col = document.createElement("td");
    if (c === 1) {
      col.innerText = `${addSubject.subjectCode}`;
    }
    if (c === 2) {
      col.innerHTML = `${addSubject.subjectName}`;
    }
    if (c === 3) {
      col.innerHTML = `เพิ่มรายวิชา`;
    }
    if (c === 4) {
      if (
        addSubject.status == "กำลังดำเนินการ" ||
        addSubject.status == "ตรวจสอบแล้ว" ||
        addSubject.status == "อนุมัติ"
      )
        col.innerHTML = `<span style="color: green;">${addSubject.status}</span>`;
      else if (
        addSubject.status == "ไม่อนุมัติ" ||
        addSubject.status == "ยกเลิก"
      )
        col.innerHTML = `<span style="color: green;">${addSubject.status}</span>`;
    }
    if (c === 5) {
      if (addSubject.status == "ยกเลิก") col.innerHTML = `ถูกยกเลิกโดยนักศึกษา`;
    }
    row.appendChild(col);
  }
}
function create_tr2(delSubject) {
  table_id = document.getElementById("tb1");
  const row = table_id.insertRow(table_id.rows.length);
  for (var c = 1; c <= 5; c++) {
    let col = document.createElement("td");
    if (c === 1) {
      col.innerText = `${delSubject.subjectCode}`;
    }
    if (c === 2) {
      col.innerHTML = `${delSubject.subjectName}`;
    }
    if (c === 3) {
      col.innerHTML = `ถอนรายวิชา`;
    }
    if (c === 4) {
      if (
        delSubject.status == "กำลังดำเนินการ" ||
        delSubject.status == "ตรวจสอบแล้ว" ||
        delSubject.status == "อนุมัติ"
      )
        col.innerHTML = `<span style="color: green;">${delSubject.status}</span>`;
      else if (
        delSubject.status == "ไม่อนุมัติ" ||
        delSubject.status == "ยกเลิก"
      )
        col.innerHTML = `<span style="color: green;">${delSubject.status}</span>`;
    }
    if (c === 5) {
      col.innerHTML = `
              `;
    }
    row.appendChild(col);
  }
}

