import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'feedPipe'
})
export class FeedPipe implements PipeTransform {
    transform(items: any[], term: string): any {
        if (!(items && term != ''))
            return items;

        return items.filter((item: any) => item.title.toLowerCase().includes(term.toLowerCase()));
    }
}