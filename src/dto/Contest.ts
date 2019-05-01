import { ContestType } from './enums/ContestType';
import { Phase } from './enums/Phase';

/**
 * A DTO class to store information of a Contest.
 */
export class Contest
{
	private id: number;
	private name: string;
	private type: ContestType;
	private phase: Phase;
	private frozen: boolean;
    private durationSeconds: number;
    private startTimeSeconds: number;
    private relativeTimeSeconds: number;
    private difficulty: number;
    private preparedBy: string;
    private websiteUrl: string;
    public description: string;
    private kind: string;
    private icpcRegion: string;
    private country: string;
    private city: string;
	private season: string;
	label: string;

	constructor(contest?: any)
	{
		this.id = contest.id;
		this.name = contest.name;
		this.type = contest.type;
		this.phase = contest.phase;
		this.frozen = contest.frozen;
		this.durationSeconds = contest.durationSeconds;
		this.startTimeSeconds = contest.startTimeSeconds;
		this.relativeTimeSeconds = contest.relativeTimeSeconds;
		this.difficulty = contest.difficulty;
		this.preparedBy = contest.preparedBy;
		this.websiteUrl = contest.websiteUrl;
		this.description = contest.description;
		this.kind = contest.kind;
		this.icpcRegion = contest.icpcRegion;
		this.country = contest.country;
		this.city = contest.city;
		this.season = contest.season;
		this.label = contest.label;
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
		return this.type;
	}

    public setContestType(t: string)
	{
		switch (t)
		{
			case "CF":
				this.type = ContestType.CF;
				break;
			case "IOI":
				this.type = ContestType.IOI;
				break;
			case "ICPC":
				this.type = ContestType.ICPC;
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
        return `id : ${this.id}, name : ${this.name}, type : ${this.type}, duration(min) : ${this.durationSeconds / 60}`;
	}

	public getDisplayDataAsArray(): Object[]
	{
		let data:any[] = new Array(4);

		data[0] = this.id;
		data[1] = this.name;
		data[2] = this.type;
		data[3] = this.durationSeconds / 60;

		return data;
	}

}
