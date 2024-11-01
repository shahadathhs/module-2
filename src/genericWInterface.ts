{
    interface User<T, X = null> {
        name: string;
        age: number;
        smartWatch: T;
        bike?: X
    }

    interface ProductInfo {
        brand: string;
        model: string;
        releaseYear?: number;
        heartTrack?: boolean;
    }

    const userOne: User<ProductInfo> = {
        name: 'Admin',
        age: 5,
        smartWatch: {
            brand: 'S',
            model: 'A',
            releaseYear: 2000
        }
    }

    const userTwo: User<ProductInfo, ProductInfo> = {
        name: 'Admin',
        age: 5,
        smartWatch: {
            brand: 'S',
            model: 'A',
            releaseYear: 2000,
            heartTrack: true
        },
        bike: {
            brand: 'S',
            model: 'B',
        }
    }
}