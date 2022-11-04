const Loop = () => {
	const LoopStar = () => {    
		let n = 5;
		for (var i = 0; i < n; i++) {
			var str = '';

			for (var j = 1; j < n - i; j++) {
				str = str + ' ';
			}

			for (var k = 1; k <= 2 * i + 1; k++) {
				str = str + '*';
			}
			console.log(str);
		}
	};


	// let n = 5;
	// let string = "";
	// for (let i = 1; i <= n; i++) {
	//   // printing spaces
	//   for (let j = 0; j < n - i; j++) {
	//     string += " ";
	//   }
	//   // printing star
	//   for (let k = 0; k < i; k++) {
	//     string += "*";
	//   }
	//   string += "\n";
	// }
	// console.log(string);

	// let n = 5;
	// let string = '';

	// for (let i = 0; i <=n; i++) {
	// 	for (let j = 0; j < n - 1 ; j++) {
	// 		string = string + ' ';
	// 	}

	// 	for (let k = 0; k < n; k++) {
	// 		string = string + '*';
	// 	}
	//     string = string + "\n"
	// }
	// console.log(string)

	//         let n = 5;
	//         let string = "";

	//         for (let i = 1; i<=n; i++){
	//             // console.log(i,'i')
	//             for(let j=0; j<n-1; j++){
	//                 // console.log(j, 'j')
	//                 string += "";
	//             }

	//             for(let k=0; k<i; k++) {
	//                 // console.log(k, 'k')
	//                 string = string + "*"
	//             }

	//             string = string + "\n"
	//         }
	// console.log(string)
	// 	};

	return (
		<div>
			<button onClick={LoopStar}>Loop start</button>
		</div>
	);
};
export default Loop;
