import { EventBus } from './event-bus';

EventBus.getInstance().register('hello-world', (name: string) => {
    if(name)
        console.log('Hello ' + name);
    else 
        console.log('Hello world');
});

EventBus.getInstance().dispatch<string>('hello-world', 'Luis');
EventBus.getInstance().dispatch<string>('hello-world');
EventBus.getInstance().dispatch<string>('hello-world');
