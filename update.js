function updateStatus(text) {
    for (var i = 1; i <= 10; i++) {
      const data = JSON.parse(localStorage.getItem(`addSubject${i}`));
      const data2 = JSON.parse(localStorage.getItem(`delSubject${i}`));
      data.status = text;
      data2.status = text;
      localStorage.setItem(`addSubject${i}`, JSON.stringify(data));
      localStorage.setItem(`delSubject${i}`, JSON.stringify(data2));
    }
  }