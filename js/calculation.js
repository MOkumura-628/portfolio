$(function () {
	// BMI
	$('#js-bmiButton').click(function () {
		var height = $('#js-height').val() / 100;
		var weight = $('#js-weight').val();
		var resultNum = $('#js-bmiNum');
		var resultText = $('#js-resultText');
		var numView = $('#js-bmiNumView');

		var bmi = Math.round(weight / height / height * 10) / 10;
		resultNum.text(bmi);

		if (25 <= bmi) {
			numView.show();
			resultText.text('肥満気味です、食事管理を気をつけましょう');
		} else if (18.5 < bmi) {
			numView.show();
			resultText.text('標準です');
		} else if (bmi != 0 && bmi <= 18.5) {
			numView.show();
			resultText.text('痩せ型です、もう少し食事をとってみてはいかがでしょうか？');
		} else {
			resultText.text('再度入力のご確認をお願いします');
		}
	});

	// HeightAvg
	$('#js-heightAvgButton').click(function () {
		var height = Number($('#js-height-avg').val());
		var heightRe = Math.round(height);
		var countryA = $('#js-country-a');
		var countryB = $('#js-country-b');

		switch (heightRe) {
			case 183:
				countryA.text('モンテネグロ人の平均');
				countryB.text('世界でも高いと言えます');
				break;
			case 182:
				countryA.text('セルビア人の平均');
				countryB.text('世界でも高いと言えます');
				break;
			case 181:
				countryA.text('リトアニア人の平均');
				countryB.text('世界でも高いと言えます');
				break;
			case 180:
				countryA.text('オランダ人の平均');
				countryB.text('世界でも高いと言えます');
				break;
			case 179:
				countryA.text('エストニア人の平均');
				countryB.text('世界でも高いと言えます');
				break;
			case 178:
				countryA.text('ドイツ人との平均');
				countryB.text('世界でも高いと言えます');
				break;
			case 177:
				countryA.text('ギリシャ人の平均');
				countryB.text('世界でも高いと言えます');
				break;
			case 176:
				countryA.text('ハンガリー人の平均');
				countryB.text('世界でも高いと言えます');
				break;
			case 175:
				countryA.text('スイス人の平均');
				countryB.text('世界でも高いと言えます');
				break;
			case 174:
				countryA.text('ドミニカ共和国人の平均');
				countryB.text('世界でも高いと言えます');
				break;
			case 173:
				countryA.text('韓国人の平均');
				countryB.text('世界でも高いと言えます');
				break;
			case 172:
				countryA.text('中国人の平均');
				countryB.text('世界でも高いと言えます');
				break;
			case 171:
				countryA.text('ジャマイカ人の平均');
				countryB.text('ボスニア・ヘルツェゴヴィナ人の平均');
				break;
			case 170:
				countryA.text('日本人の平均');
				countryB.text('ボスニア・ヘルツェゴヴィナ人の平均');
				break;
			case 169:
				countryA.text('ガーナ人の平均');
				countryB.text('デンマーク人の平均');
				break;
			case 168:
				countryA.text('モンゴル人の平均');
				countryB.text('デンマーク人の平均');
				break;
			case 167:
				countryA.text('マレーシア人の平均');
				countryB.text('オランダ人の平均');
				break;
			case 166:
				countryA.text('ベトナム人の平均');
				countryB.text('オーストリア人の平均');
				break;
			case 165:
				countryA.text('フィリピン人の平均');
				countryB.text('ポーランド人の平均');
				break;
			case 164:
				countryA.text('ナイジェリア人の平均');
				countryB.text('ハンガリー人の平均');
				break;
			case 163:
				countryA.text('スリランカ人の平均');
				countryB.text('アイルランド人の平均');
				break;
			case 162:
				countryA.text('ネパール人の平均');
				countryB.text('カナダ人の平均');
				break;
			case 161:
				countryA.text('ボリビア人の平均');
				countryB.text('カメルーン人の平均');
				break;
			case 160:
				countryA.text('世界でも低いと言えます');
				countryB.text('シンガポール人の平均');
				break;
			case 159:
				countryA.text('世界でも低いと言えます');
				countryB.text('メキシコ人の平均');
				break;
			case 158:
				countryA.text('世界でも低いと言えます');
				countryB.text('日本人の平均');
				break;
			case 157:
				countryA.text('世界でも低いと言えます');
				countryB.text('ルーマニア人の平均');
				break;
			case 156:
				countryA.text('世界でも低いと言えます');
				countryB.text('キューバ人の平均');
				break;
			case 155:
				countryA.text('世界でも低いと言えます');
				countryB.text('マレーシア人の平均');
				break;
			case 154:
				countryA.text('世界でも低いと言えます');
				countryB.text('バーレーン人の平均');
				break;
			case 153:
				countryA.text('世界でも低いと言えます');
				countryB.text('カンボジア人の平均');
				break;
			case 152:
				countryA.text('世界でも低いと言えます');
				countryB.text('ベトナム人の平均');
				break;
			case 151:
				countryA.text('世界でも低いと言えます');
				countryB.text('ペルー人の平均');
				break;
			case 150:
				countryA.text('世界でも低いと言えます');
				countryB.text('バングラディシュ人の平均');
				break;
			case 149:
				countryA.text('世界でも低いと言えます');
				countryB.text('グアテマラ人の平均');
				break;
			case 148:
				countryA.text('世界でも低いと言えます');
				countryB.text('インドネシア人の平均');
				break;
			case 147:
				countryA.text('世界でも低いと言えます');
				countryB.text('インドネシア人の平均');
				break;
			case 146:
				countryA.text('世界でも低いと言えます');
				countryB.text('世界でも低いと言えます');
				break;
			case 145:
				countryA.text('世界でも低いと言えます');
				countryB.text('世界でも低いと言えます');
				break;
			default:
				console.log('NG');
		}
	});

	$('#js-salaryButton').click(function () {
		var salaryOneHour = $('#js-salary').val() * 10000 / 2000;
		$('#js-salary-num').text(salaryOneHour);
		$('#js-salaryResult').fadeOut('fast');
		$('#js-salaryResult').fadeIn('slow');
	});

	$('#js-gates').click(function () {
		var salaryGa = $('#js-gates-salary').val();
		var gatesSeconds = 127;
		var resultGates = Math.round(salaryGa / gatesSeconds * 100) / 100;
		var resultGatesBox = $('#js-resultGates-box');

		$('#js-resultGates').text(resultGates);
		resultGatesBox.fadeOut(500);
		resultGatesBox.fadeIn(1500);
	});

	$('#js-dayCal').click(function () {
		var dateCheck = new Date();

		var appYear = $('#js-date-y').val();
		var appMonth = $('#js-date-m').val();
		var appDay = $('#js-date-d').val();

		var appDateSet = new Date(appYear, appMonth - 1, appDay);

		if (dateCheck < appDateSet && 1 <= appMonth && appMonth <= 12 && 1 <= appDay && appDay <= 31) {
			$('#js-dateResult-error').hide();
			var resultDiff = Math.ceil((appDateSet - dateCheck) / 24 / 60 / 60 / 1000);

			$('#js-appYear').text(appYear);
			$('#js-appMonth').text(appMonth);
			$('#js-appDay').text(appDay);
			$('#js-resultDiff').text(resultDiff);
			$('#js-dateResultText').fadeIn('slow');
		} else {
			$('#js-dateResultText').hide();
			$('#js-error-text').text('エラーです入力をご確認ください');
			$('#js-dateResult-error').show();
		}


	});

	$('#js-lifeCal').click(function () {
		var dateCheck = new Date();

		var appYear = $('#js-life-y').val();
		var appMonth = $('#js-life-m').val();
		var appDay = $('#js-life-d').val();
		var appDateSet = new Date(appYear, appMonth - 1, appDay);

		if (appDateSet < dateCheck && 1 <= appMonth && appMonth <= 12 && 1 <= appDay && appDay <= 31) {
			$('#js-lifeLimitText-error').hide();
			var ageDay = Math.floor((dateCheck - appDateSet) / 24 / 60 / 60 / 1000);
			// 84年を寿命と仮定
			var lifeFull = 365 * 84;
			var limitLife = lifeFull - ageDay;
			$('#js-limit-days').text(limitLife);
			$('#js-lifeLimitText').fadeIn('slow');

		} else {
			$('#js-lifeLimitText').hide();
			$('#js-limit-error').text('エラーです入力をご確認ください');
			$('#js-lifeLimitText-error').fadeIn('slow');
		}

	});
});
