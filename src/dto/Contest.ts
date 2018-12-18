/**
 * ..
 */
class Contest
{
	private id: number;
	private name: string;
	private contestType: ContestType;
	private phase: Phase;
	private frozen: boolean;
    private durationSeconds: number;
    private startTimeSeconds: number;
    private relativeTimeSeconds: number;
    private difficulty: number;
    private preparedBy: string;
    private websiteUrl: string;
    private description: string;
    private kind: string;
    private icpcRegion: string;
    private country: string;
    private city: string;
    private season: string;

    constructor(id: number, name: string, contestType: ContestType, phase: Phase, frozen: boolean, durationSeconds: number, 
        startTimeSeconds: number, relativeTimeSeconds: number, difficulty: number, preparedBy: string, websiteUrl: string, 
        description: string, kind: string, icpcRegion: string, country: string, city: string, season: string)
	{
		this.id = id;
		this.name = name;
		this.contestType = contestType;
		this.phase = phase;
		this.frozen = frozen;
		this.durationSeconds = durationSeconds;
		this.startTimeSeconds = startTimeSeconds;
		this.relativeTimeSeconds = relativeTimeSeconds;
		this.difficulty = difficulty;
		this.preparedBy = preparedBy;
		this.websiteUrl = websiteUrl;
		this.description = description;
		this.kind = kind;
		this.icpcRegion = icpcRegion;
		this.country = country;
		this.city = city;
		this.season = season;
	}

	public Contest()
	{
		// default, in case start time is not provided.
		this.startTimeSeconds = this.relativeTimeSeconds = this.difficulty = -1;
	}

	public getId(): number
	{
		return this.id;
	}

    public setId(id: number)
	{
		this.id = id;
	}

    public getName(): string
	{
		return this.name;
	}

    public setName(name: string)
	{
		this.name = name;
	}

    public getContestType(): ContestType
	{
		return this.contestType;
	}

    public setContestType(t: string)
	{
		switch (t)
		{
			case "CF":
				this.contestType = ContestType.CF;
				break;
			case "IOI":
				this.contestType = ContestType.IOI;
				break;
			case "ICPC":
				this.contestType = ContestType.ICPC;
				break;
            default:
                const contestTypes = Object.keys(ContestType);

                throw TypeError(`Contest type should be one of ${contestTypes}.`);
		}
	}

    public getPhase(): Phase
	{
		return this.phase;
	}

    public setPhase(p: string)
	{
		switch (p)
		{
			case "BEFORE":
				this.phase = Phase.BEFORE;
				break;
			case "CODING":
				this.phase = Phase.CODING;
				break;
			case "PENDING_SYSTEM_TEST":
				this.phase = Phase.PENDING_SYSTEM_TEST;
				break;
			case "SYSTEM_TEST":
				this.phase = Phase.SYSTEM_TEST;
				break;
			case "FINISHED":
				this.phase = Phase.FINISHED;
				break;
            default:
                const phases = Object.keys(Phase);

                throw TypeError(`Contest phase should be one of ${phases}.`);
		}
	}

    public isFrozen(): boolean
	{
		return this.frozen;
	}

    public setFrozen(frozen: boolean)
	{
		this.frozen = frozen;
	}

    public getDurationSeconds(): number
	{
		return this.durationSeconds;
	}

    public setDurationSeconds(durationSeconds: number)
	{
		this.durationSeconds = durationSeconds;
	}

    public getStartTimeSeconds(): number
	{
		return this.startTimeSeconds;
	}

    public setStartTimeSeconds(startTimeSeconds: number)
	{
		this.startTimeSeconds = startTimeSeconds;
	}

    public getRelativeTimeSeconds(): number
	{
		return this.relativeTimeSeconds;
	}

    public setRelativeTimeSeconds(relativeTimeSeconds: number)
	{
		this.relativeTimeSeconds = relativeTimeSeconds;
	}

    public getDifficulty(): number
	{
		return this.difficulty;
	}

    public setDifficulty(difficulty: number)
	{
		this.difficulty = difficulty;
	}

    public getPreparedBy(): string
	{
		return this.preparedBy;
	}

    public setPreparedBy(preparedBy: string)
	{
		this.preparedBy = preparedBy;
	}

    public getWebsiteUrl(): string
	{
		return this.websiteUrl;
	}

    public setWebsiteUrl(websiteUrl: string)
	{
		this.websiteUrl = websiteUrl;
	}

    public getDescription(): string
	{
		return this.description;
	}

    public setDescription(description: string)
	{
		this.description = description;
	}

    public getKind(): string
	{
		return this.kind;
	}

    public setKind(kind: string)
	{
		this.kind = kind;
	}

    public getIcpcRegion(): string
	{
		return this.icpcRegion;
	}

    public setIcpcRegion(icpcRegion: string)
	{
		this.icpcRegion = icpcRegion;
	}

    public getCountry(): string
	{
		return this.country;
	}

    public setCountry(country: string)
	{
		this.country = country;
	}

    public getCity(): string
	{
		return this.city;
	}

    public setCity(city: string)
	{
		this.city = city;
	}

    public getSeason(): string
	{
		return this.season;
	}

    public setSeason(season: string)
	{
		this.season = season;
	}

	public toString(): string
	{
/* 		return String.format("id : %d, \tname : %s, \ttype : %s, \tphase : %s, \tfrozen : %c, \tduration(min) : %d, "
						+ "\tstartTime (sec) : %d, \trelativeTime (sec) : %d, \tdifficulty : %d, \tpreparedBy : %s, "
						+ "\twebsiteUrl : %s, \tdescription : %s, \tkind : %s, \ticpcRegion : %s, \tcountry : %s, "
						+ "\tcity : %s, \tseason : %s", id,
				name, contestType,
				phase, frozen ? 't' : 'f', durationSeconds / 60, this.startTimeSeconds, relativeTimeSeconds, this.difficulty,
                preparedBy, websiteUrl, description, kind, icpcRegion, country, city, season); */

        // return new Contest(${this.id}, ${this.type})
			
		// TODO: check working of print(objName), and complete toString() if required.
        return `id : ${this.id}, name : ${this.name}, type : ${this.contestType}, frozen : ${this.frozen}`;
	}

	public getDisplayDataAsArray(): Object[]
	{
		var data:any[] = new Array(4);

		data[0] = this.id;
		data[1] = this.name;
		data[2] = this.contestType;
		data[3] = this.durationSeconds / 60;

		return data;
	}

}
