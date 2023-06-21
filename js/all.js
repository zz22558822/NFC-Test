
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
  
	  const reader = new NDEFReader();
  
	  reader.addEventListener('reading', event => {
		const records = event.message.records;
  
		for (const record of records) {
		  console.log(record.data);
		}
  
		statusElement.innerHTML = '<i class="fas fa-tag"></i> NFC 狀態：已讀取';
	  });
  
	  reader.scan().catch(error => {
		console.error('Error scanning NFC: ', error);
	  });
	} else {
	  console.error('Web NFC API is not supported in this browser.');
	  document.getElementById('status').innerHTML = '<i class="fas fa-exclamation-circle"></i> NFC 功能不支援';
	}
  }
  