module.exports = {
	name: "Countdown-cards-test",
	description: "Testing All cards in countdown",
	category: "Time",
	icon: "stopwatch",
	hasEntries: false,
	default: {
		style: {
			//horizontal_position: "left",
			//vertical_position: "top",
			//width: "50"
			
		},
		props: {
			type: "timer",
			seconds: "00:00",
			count_up: true,
			running: false,
			format: "$MM minutes $SS seconds"
		}
	},
	props: [
		{
			name: "teamAname",
			description: "Team A name",
			type: "String"
		},
		{
			name: "teamBname",
			description: "Team B name",
			type: "String"
		},
		{
			name: "colorA",  //COLOUR INPUT A
			description: "Team A Colour",
			type: "ColorPicker"
		},
		{
			name: "colorB",  //COLOUR INPUT B
			description: "Team B Colour",
			type: "ColorPicker"
		},
		{
			color: "rgba(255,255,255,1)"
		},
		{
			name: "scoreA",
			description: "Team A score",
			type: "Number"
		},
		{
			name: "scoreB",
			description: "Team B score",
			type: "Number"
		},
		{
			name: "running",
			description: "Timer is running",
			type: "Radio",
			options: [
				{
					name: "Running",
					value: true
				},
				{
					name: "Paused",
					value: false
				}
			]
		},
		{
			name: "redbtn",
			description: "Red Timer box",
			type: "Radio",
			options: [
				{
					name: "On",
					value: true
				},
				{
					name: "Off",
					value: false
				}
			]
		},
		{
			name: "type",
			description:
				"Timer type",
			type: "Radio",
			options: [
				{
					name: "Countdown",
					value: "countdown"
				},
				{
					name: "Timer",
					value: "timer"
				}
			]
		},
		{
			name: "seconds",
			description: "Start time",
			type: "String"
		},
		{
			name: "count_up",
			description: "Continue counting after reaching 0",
			type: "Radio",
			options: [
				{
					name: "Stop at zero",
					value: true
				},
				{
					name: "Continue",
					value: true
				}
			]
		},
		{
			name: "format",
			description: "Countdown format",
			type: "Select",
			options: [
				{
					name: "Time in words",
					value: "humanize"
				},
				{
					name: "D days HH hours MM minutes SS seconds",
					value: "$D days $HH hours $MM minutes $SS seconds"
				},
				{
					name: "D:HH:MM:SS",
					value: "$D:$HH:$MM:$SS"
				},
				{
					name: "HH:MM:SS",
					value: "$HH:$MM:$SS"
				},
				{
					name: "MM:SS",
					value: "$MM:$SS"
				},
				{
					name: "M:S",
					value: "$M:$S"
				},
				{
					name: "Custom format",
					value: "custom"
				}
			]
		}
	],
	// methods: {
	// 	pauseresume () {
	// 		this.props.running = !this.props.running
	// 		this.save()
	// 		return true
	// 	}
	// },
	// actions: [
	// 	{
	// 		name: "pauseresume",
	// 		title: "Pause / resume",
	// 		description: "Pause / resume the countdown clock (will not adjust target)",
	// 		type: "Button",
	// 		style: { type: "warning" },
	// 		method: "pauseresume"
	// 	}
	// ],
	vue_template: getFile("index.html").toString(),
	vue_component: getFile("component.js").toString(),
	css: getFile("style.css").toString()
}