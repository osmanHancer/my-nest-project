import { SahacalısmasıService } from './sahacalısması.service';
import { CreateSahacalısmasıDto } from './create-sahacalısması.dto';
export declare class SahacalısmasıController {
    private readonly sahacalısmasıService;
    constructor(sahacalısmasıService: SahacalısmasıService);
    create(createSahacalısmasıDto: CreateSahacalısmasıDto): Promise<CreateSahacalısmasıDto>;
    findAll(): Promise<CreateSahacalısmasıDto[]>;
    findOne(sahaismi: string): Promise<CreateSahacalısmasıDto>;
    update(id: string, updateSahacalısmasıDto: CreateSahacalısmasıDto): string;
    remove(sahaismi: string): Promise<{
        deleted: boolean;
    }>;
}
