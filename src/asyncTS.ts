{
    type Todo = {
        id: number;
        userId: number;
        title: string;
        completed: boolean;
    }

    const getTodo = async (): Promise<Todo> => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')

        return await response.json()
    }

    type Something = { something: string };

    const createPromise = (): Promise<Something> => {
        return new Promise<Something>((resolve, reject) => {
            const data = {something: 'Something'};

            if (data) {
                resolve(data);
            } else {
                reject('Failed to resolve data');
            }
        });
    };

    const showData = async () => {
        try {
            const data: Something = await createPromise();
            console.log(data);
            return data;
        } catch (error) {
            console.error(error);
        }
    };

    showData();

}