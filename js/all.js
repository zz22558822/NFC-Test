
// // V1
// // 檢查瀏覽器是否支援 Web NFC API
// if ('NDEFReader' in window) {
// 	const statusElement = document.getElementById('status');
  
// 	// 啟用 NFC 功能
// 	const reader = new NDEFReader();
  
// 	// 設定事件監聽器
// 	reader.addEventListener('reading', event => {
// 	  // 讀取標籤資料
// 	  const records = event.message.records;
	  
// 	  // 處理標籤資料
// 	  for (const record of records) {
// 		console.log(record.data);
// 	  }
  
// 	  // 更新狀態顯示
// 	  statusElement.innerHTML = '<i class="fas fa-tag"></i> NFC 狀態：已讀取';
// 	});
  
// 	// 啟動讀取
// 	reader.scan().catch(error => {
// 	  console.error('Error scanning NFC: ', error);
// 	});
//   } else {
// 	console.error('Web NFC API is not supported in this browser.');
// 	// 更新狀態顯示
// 	document.getElementById('status').innerHTML = '<i class="fas fa-exclamation-circle"></i> NFC 功能不支援';
//   }



// V2
function startNfcScan() {
  if ('NDEFReader' in window) {
    const statusElement = document.getElementById('status');
    statusElement.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 請掃描 NFC'; // 初始狀態：請掃描 NFC，並加上旋轉的 Spinner 圖示

    const valueContainer = document.getElementById('valueContainer');
    valueContainer.innerHTML = ''; // 清空數值容器

    const reader = new NDEFReader();

    reader.addEventListener('reading', event => {
      const records = event.message.records;

      for (const record of records) {
        console.log(record.data);

        // 創建一個新的元素來顯示每個記錄的值
        const valueElement = document.createElement('input');
        valueElement.type = 'text';
        valueElement.value = JSON.stringify(record.data);
        valueElement.disabled = true;
        valueContainer.appendChild(valueElement);
      }

      statusElement.innerHTML = '<i class="fas fa-check"></i> NFC 狀態：已讀取'; // 讀取完成後的狀態：已讀取
    });

    reader.scan().catch(error => {
      console.error('Error scanning NFC: ', error);
      statusElement.innerHTML = '<i class="fas fa-times red"></i> 無法掃描 NFC'; // NFC 功能未啟用的狀態
    });
  } else {
    console.error('Web NFC API is not supported in this browser.');
    document.getElementById('status').innerHTML = '<i class="fas fa-times red"></i> NFC 功能不支援';
  }
}

