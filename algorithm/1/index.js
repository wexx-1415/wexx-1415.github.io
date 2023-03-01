let dom = document.getElementById('chart-container');
let myChart = echarts.init(dom, null, {
	renderer: 'canvas',
	useDirtyRect: false,
});
let chart4bubble = echarts.init(
	document.getElementById('chart-container-2'),
	null,
	{
		renderer: 'canvas',
		useDirtyRect: false,
	}
);
let chart4quick = echarts.init(
	document.getElementById('chart-container-3'),
	null,
	{
		renderer: 'canvas',
		useDirtyRect: false,
	}
);
let app = {};

let option;

const posList = [
	'left',
	'right',
	'top',
	'bottom',
	'inside',
	'insideTop',
	'insideLeft',
	'insideRight',
	'insideBottom',
	'insideTopLeft',
	'insideTopRight',
	'insideBottomLeft',
	'insideBottomRight',
];
app.configParameters = {
	rotate: {
		min: -90,
		max: 90,
	},
	align: {
		options: {
			left: 'left',
			center: 'center',
			right: 'right',
		},
	},
	verticalAlign: {
		options: {
			top: 'top',
			middle: 'middle',
			bottom: 'bottom',
		},
	},
	position: {
		options: posList.reduce(function (map, pos) {
			map[pos] = pos;
			return map;
		}, {}),
	},
	distance: {
		min: 0,
		max: 100,
	},
};
app.config = {
	rotate: 90,
	align: 'left',
	verticalAlign: 'middle',
	position: 'insideBottom',
	distance: 15,
	onChange: function () {
		const labelOption = {
			rotate: app.config.rotate,
			align: app.config.align,
			verticalAlign: app.config.verticalAlign,
			position: app.config.position,
			distance: app.config.distance,
		};
		myChart.setOption({
			series: [
				{
					label: labelOption,
				},
				{
					label: labelOption,
				},
				{
					label: labelOption,
				},
				{
					label: labelOption,
				},
			],
		});
	},
};
const labelOption = {
	show: true,
	position: app.config.position,
	distance: app.config.distance,
	align: app.config.align,
	verticalAlign: app.config.verticalAlign,
	rotate: app.config.rotate,
	formatter: '{c}  {name|{a}}',
	fontSize: 16,
	rich: {
		name: {},
	},
};
option = {
	tooltip: {
		trigger: 'axis',
		axisPointer: {
			type: 'shadow',
		},
	},
	legend: {
		data: ['bubble', 'quick'],
	},
	toolbox: {
		show: true,
		orient: 'vertical',
		left: 'right',
		top: 'center',
		feature: {
			mark: { show: true },
			dataView: { show: true, readOnly: false },
			magicType: { show: true, type: ['line', 'bar', 'stack'] },
			restore: { show: true },
			saveAsImage: { show: true },
		},
	},
	xAxis: [
		{
			type: 'category',
			axisTick: { show: false },
			data: ['20000', '40000', '60000', '80000', '100000'],
		},
	],
	yAxis: [
		{
			type: 'value',
		},
	],
	series: [
		{
			name: 'bubble',
			type: 'bar',
			barGap: 0,
			label: labelOption,
			emphasis: {
				focus: 'series',
			},
			data: [156.4, 1027.8, 2745.4, 5197.4, 8645.8],
		},
		{
			name: 'quick',
			type: 'bar',
			label: labelOption,
			emphasis: {
				focus: 'series',
			},
			data: [0.4, 0.8, 2.8, 3.4, 4.8],
		},
	],
};

if (option && typeof option === 'object') {
	myChart.setOption(option);
}
chart4bubble.setOption({
	tooltip: {
		trigger: 'axis',
		axisPointer: {
			type: 'shadow',
		},
	},
	legend: {
		data: ['1st', '2nd', '3rd', '4th', '5th'],
	},
	toolbox: {
		show: true,
		orient: 'vertical',
		left: 'right',
		top: 'center',
		feature: {
			mark: { show: true },
			dataView: { show: true, readOnly: false },
			magicType: { show: true, type: ['line', 'bar', 'stack'] },
			restore: { show: true },
			saveAsImage: { show: true },
		},
	},
	xAxis: [
		{
			type: 'category',
			axisTick: { show: false },
			data: ['20000', '40000', '60000', '80000', '100000'],
		},
	],
	yAxis: [
		{
			type: 'value',
		},
	],
	series: [
		{
			name: '1st',
			type: 'bar',
			barGap: 0,
			label: labelOption,
			emphasis: {
				focus: 'series',
			},
			data: [157, 1022, 2759, 5207, 8424],
		},
		{
			name: '2nd',
			type: 'bar',
			label: labelOption,
			emphasis: {
				focus: 'series',
			},
			data: [156, 1037, 2748, 5192, 8413],
		},
		{
			name: '3rd',
			type: 'bar',
			label: labelOption,
			emphasis: {
				focus: 'series',
			},
			data: [157, 1028, 2741, 5201, 8398],
		},
		{
			name: '4th',
			type: 'bar',
			label: labelOption,
			emphasis: {
				focus: 'series',
			},
			data: [157, 1025, 2742, 5194, 8922],
		},
		{
			name: '5th',
			type: 'bar',
			label: labelOption,
			emphasis: {
				focus: 'series',
			},
			data: [155, 1027, 2737, 5193, 9072],
		},
	],
});
chart4quick.setOption({
	tooltip: {
		trigger: 'axis',
		axisPointer: {
			type: 'shadow',
		},
	},
	legend: {
		data: ['1st', '2nd', '3rd', '4th', '5th'],
	},
	toolbox: {
		show: true,
		orient: 'vertical',
		left: 'right',
		top: 'center',
		feature: {
			mark: { show: true },
			dataView: { show: true, readOnly: false },
			magicType: { show: true, type: ['line', 'bar', 'stack'] },
			restore: { show: true },
			saveAsImage: { show: true },
		},
	},
	xAxis: [
		{
			type: 'category',
			axisTick: { show: false },
			data: ['20000', '40000', '60000', '80000', '100000'],
		},
	],
	yAxis: [
		{
			type: 'value',
		},
	],
	series: [
		{
			name: '1st',
			type: 'bar',
			barGap: 0,
			label: labelOption,
			emphasis: {
				focus: 'series',
			},
			data: [0, 0, 2, 4, 5],
		},
		{
			name: '2nd',
			type: 'bar',
			label: labelOption,
			emphasis: {
				focus: 'series',
			},
			data: [0, 1, 3, 3, 3],
		},
		{
			name: '3rd',
			type: 'bar',
			label: labelOption,
			emphasis: {
				focus: 'series',
			},
			data: [1, 1, 3, 4, 5],
		},
		{
			name: '4th',
			type: 'bar',
			label: labelOption,
			emphasis: {
				focus: 'series',
			},
			data: [0, 1, 3, 3, 6],
		},
		{
			name: '5th',
			type: 'bar',
			label: labelOption,
			emphasis: {
				focus: 'series',
			},
			data: [1, 1, 3, 3, 5],
		},
	],
});
window.addEventListener(
	'resize',
	myChart.resize,
	chart4bubble.resize,
	chart4quick.resize
);
