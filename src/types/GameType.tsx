import ItemsType from "./ItemsType";

export interface option {
	title: string;
	nextNodeId?: number;
	required?: ItemsType[];
	newState?: Partial<Record<ItemsType, boolean>>;
}

interface Node {
	title: string;
	defaultNextNode?: number;
	options: option[];
}

interface GameType {
	[key: number]: Node;
}

export default GameType;
