import { ProblemType } from "./enums/ProblemType";

/**
 * ..
 */
export class Problem
{
    private contestId: number;
    private index: string;
    private name: string;
	private problemType: ProblemType;
	private points: number;
    private tags: string[];
    public testCases: TestCase[];
    
    constructor(contestId: number, index: string, name: string, problemType: ProblemType, points: number,
        tags: string[], testCases: TestCase[])
    {
        this.contestId = contestId;
        this.index = index;
        this.name = name;
        this.problemType = problemType;
        this.points = points;
        this.tags = tags;
        this.testCases = testCases;
    }

    // set tests.
    public getContestId(): number
	{
		return this.contestId;
	}

	public setContestId(contestId: number)
	{
		this.contestId = contestId;
	}

    public getIndex(): string
	{
		return this.index;
	}

    public setIndex(index: string)
	{
		this.index = index;
	}

    public getName(): string
	{
		return this.name;
	}

    public setName(name: string)
	{
		this.name = name;
	}

    public getProblemType(): ProblemType
	{
		return this.problemType;
	}

    public setProblemType(problemType: string)
	{
		switch (problemType)
		{
			case "PROGRAMMING":
				this.problemType = ProblemType.PROGRAMMING;
				break;
			case "QUESTION":
				this.problemType = ProblemType.QUESTION;
				break;
			default:
                const problemTypes = Object.keys(ProblemType);

                throw TypeError(`Contest type should be one of ${problemTypes}.`);
		}
	}

    public getPoints(): number
	{
		return this.points;
	}

    public setPoints(points: number)
	{
		this.points = points;
	}

    public getTags(): string[]
	{
		return this.tags;
	}

    public setTags(tags: string[])
	{
		this.tags = tags;
	}

    // TODO: complete toString() if required.
	// @Override public String toString()
	// {
/* 		StringBuilder builder = new StringBuilder("[");
		int size = tags.size();

		for (int i = 0; i < size - 1; i++)
			builder.append(tags.get(i)).append(", ");

		if (tags.size() > 0)
			builder.append(tags.get(size - 1));

		builder.append("]");

		return String.format("contestId : %d, \tindex : %s, \tname : %s, \tproblemType : %s, \tpoints : %.2f",
				contestId, index, name, problemType, points) + ", tags : " + builder.toString(); */
	// }

}
