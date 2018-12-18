export class TestCase
{
    private input: string;
    private output: string;

    constructor(input: string, output: string)
    {
        this.input = input;
        this.output = output;
    }

	public getInput(): string
	{
		return this.input;
	}

    public setInput(input: string)
	{
		this.input = input;
	}

    public getOutput(): string
	{
		return this.output;
	}

    public setOutput(output: string)
	{
		this.output = output;
	}

	public toString(): string
	{
		return `${this.input} + =>\n + ${this.output}`;
	}

}
