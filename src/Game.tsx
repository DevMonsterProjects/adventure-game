import GameType from "types/GameType";

const Game: GameType = {
	1: {
		title:
			"You wake up in a laboratory, and have a wire attached to your body! There is a gun on nearby on a bench what will you do?",
		options: [
			{ title: "Remove the wire and move out of the room!", nextNodeId: 2 },
			{
				title: "Pick up the gun and move out of the room!",
				nextNodeId: 3,
				newState: { Gun: true },
			},
			{
				title: "Remove the wire and pick up a flashlight and move out!",
				nextNodeId: 2,
				newState: { Flashlight: true },
			},
			{ title: "Just walk out!", nextNodeId: 3 },
		],
	},
	2: {
		title:
			"You are in corridor and see a zombie comming towards you what will you do?",
		options: [
			{ title: "Run Away in opposite direction", nextNodeId: 5 },
			{
				title: "Use the flashlight to stun the zombie!",
				required: ["Flashlight"],
				newState: { Flashlight: false },
				nextNodeId: 7,
			},
			{
				title: "Use the flashlight to beat the zombie!",
				required: ["Flashlight"],
				newState: { Flashlight: false },
				nextNodeId: 7,
			},
			{ title: "Fight the zombie by yourself", nextNodeId: 6 },
		],
	},
	3: {
		title:
			"You didn't remove the wire properly resulting in it rupturing your skin now you are bleeding! What will you do?",
		defaultNextNode: 4,
		options: [
			{ title: "Try to find a first-aid kit in the lab corridor!" },
			{ title: "Ignore the the bleeding and explore this place more!" },
			{ title: "Sit down and rest for a while!" },
			{ title: "Shout for help!" },
		],
	},
	4: {
		title:
			"After about 15 minute you see something moving behind a door! What will you do?",
		options: [
			{
				title: "Shoot at the door with a gun",
				required: ["Gun"],
				newState: { Gun: false },
				nextNodeId: 5,
			},
			{ title: "Inspect the the door", nextNodeId: 5 },
			{ title: "Call out `who is there`!", nextNodeId: 7 },
			{ title: "Retreat!", nextNodeId: 6 },
		],
	},
	5: {
		title: "A zombie got you you are dead!",
		options: [],
	},
	6: {
		title: "You bled to death!",
		options: [],
	},
	7: {
		title: "You are safe a doctor came to save you!",
		options: [],
	},
};

export default Game;
