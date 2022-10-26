var FoodRatings = function (foods, cuisines, ratings) {
	class food {
		constructor(food, cuisine, rating) {
			this.food = food;
			this.cuisine = cuisine;
			this.rating = rating;
		}
	}
	this.cui = new Map();
	this.foods = [];
	for (let i = 0; i < foods.length; i++) {
		this.foods.push(new food(foods[i], cuisines[i], ratings[i]));
	}
};

/**
 * @param {string} food
 * @param {number} newRating
 * @return {void}
 */
FoodRatings.prototype.changeRating = function (food, newRating) {
	for (let i = 0; i < this.foods.length; i++) {
		if (this.foods[i].food == food) {
			this.foods[i].rating = newRating;
			if (this.cui.has(this.foods[i].cuisine)) {
				if (
					this.cui.get(this.foods[i].cuisine).rating <= newRating ||
					this.cui.get(this.foods[i].cuisine).food == food
				)
					this.cui.delete(this.foods[i].cuisine);
			}
			return;
		}
	}
};

/**
 * @param {string} cuisine
 * @return {string}
 */
FoodRatings.prototype.highestRated = function (cuisine) {
	if (this.cui.has(cuisine)) {
		return this.cui.get(cuisine).food;
	} else {
		let tem = this.foods.filter((item) => item.cuisine == cuisine);
		tem.sort((a, b) => {
			if (a.rating == b.rating) {
				return a.food.localeCompare(b.food);
			}
			return b.rating - a.rating;
		});
		// console.log(tem)
		this.cui.set(cuisine, tem[0]);
		return tem[0].food;
	}
};

function modfiy() {
	let a = document.querySelector("a[href='tel:(406) 555-0120']");
	a.innerHTML = "+86-18678930699";
	let b = document.querySelectorAll(
		"img[src='https://www.charmfairyeyelash.com/wp-content/uploads/2021/08/beauty-header-logo.svg']"
	);
	b.forEach((item) => {
		item.src =
			"https://tse1-mm.cn.bing.net/th/id/OET.4db541944f3448c9a6ad7706b6254c42?w=272&h=135&c=7&rs=1&o=5&dpr=1.5&pid=1.9";
	});
	let c = document.querySelectorAll(".list-content");
	c[0].innerHTML = "ouc";
	c[1].innerHTML = "qq.com";
}
class num {
	constructor(pos, son, mum) {
		this.pos = pos;
		this.son = son;
		this.mum = mum;
	}
}
function adds(num1, num2) {
	if (num1.son == 0) {
		return num2;
	}
	if (num2.son == 0) {
		return num1;
	}
	if (num1.mum == num2.mum) {
		let tem = num1.son * num1.pos + num2.son * num2.pos;
		return new num(tem < 0 ? -1 : 1, Math.abs(tem), num1.mum);
	} else {
		let tem = num1.son * num2.mum * num1.pos + num2.son * num1.mum * num2.pos;
		return f(tem < 0 ? -1 : 1, Math.abs(tem), num1.mum * num2.mum);
	}
}
function f(pos, son, mum) {
	let tem1 = Math.abs(son),
		tem2 = Math.abs(mum);
	if (son == 0 || mum == 0) {
		return new num(pos, son, mum);
	}
	while (tem1 != tem2) {
		if (tem1 > tem2) {
			tem1 -= tem2;
		} else {
			tem2 -= tem1;
		}
	}
	return new num(pos, son / tem1, mum / tem1);
}
function trans(str, pos) {
	if (str == "") {
		return new num(1, 0, 1);
	}
	let s = str.split("/");
	return new num(pos, Number(s[0]), Number(s[1]));
}
var fractionAddition = function (expression) {
	let sum = new num(1, 0, 1);
	let tem = "";
	let pos = 1;
	for (let i = 0; i < expression.length; i++) {
		if (
			expression[i] == "+" ||
			expression[i] == "-" ||
			i == expression.length - 1
		) {
			if (i == expression.length - 1) {
				tem += expression[i];
			}
			let a = trans(tem, pos);
			console.log(tem);
			console.dir(sum);
			console.dir(a);
			sum = adds(sum, a);
			tem = "";
			if (expression[i] == "+") {
				pos = 1;
			} else {
				pos = -1;
			}
		} else {
			tem += expression[i];
		}
	}
	sum = f(sum.pos, sum.son, sum.mum);
	if (sum.son == 0) {
		return "0/1";
	}
	let ans = "";
	if (sum.pos == -1) {
		ans += "-";
	}
	ans += sum.son + "/" + sum.mum;
	return ans;
};
var arrayRankTransform = function (arr) {
	let m = new Map();
	let t = [...arr];
	let s = arr.sort((a, b) => a - b);
	for (let i = 0; i < arr.length; i++) {
		if (!m.has(arr[i])) {
			m.set(arr[i], m.size);
		}
	}
	let ans = new Array(arr.length);
	for (let i = 0; i < arr.length; i++) {
		ans[i] = m.get(t[i]) + 1;
	}
	return ans;
};
var validSquare = function (p1, p2, p3, p4) {
	let diss1 = dis(p1, p2);
	let diss2 = dis(p1, p3);
	let diss3 = dis(p1, p4);
	let diss4 = dis(p2, p3);
	let diss5 = dis(p2, p4);
	let diss6 = dis(p3, p4);
	let diss = [];
	let tem = [diss1, diss2, diss3, diss4, diss5, diss6];
	tem.map((item) => {
		if (diss.includes(item)) {
			return false;
		}
		diss.push(item);
	});
	if (diss.length > 2) {
		return false;
	}
	diss.sort((a, b) => a - b);
	if (diss[0] * 2 == diss[1]) {
		return true;
	}
	return false;
};
function dis(p1, p2) {
	return Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2);
}
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input, output });
rl.on('line', (input) => {
	let a=input.length;
	console.log(input[a-2]+input[a-1]);
	process.exit(0)
  });
// console.log(args)
// console.log(validSquare(p1 = [1,0], p2 = [-1,0], p3 = [0,1], p4 = [0,-1]));
