namespace dependecy_inversion_demo_1 {

    function getUniqueId() {
        return Math.random().toString(36).substr(2, 9);
    }

    class CookiePersitanceService {
        public save(value: string): string {
            let id = getUniqueId();
            document.cookie = `${id}=${value}`;
            return id;
        }
        public CookiesSupported() {
            return true;
        }
    }

    class FavouritesController {
        private _persistanceService: CookiePersitanceService;
        public constructor(persistanceService: CookiePersitanceService) {
            this._persistanceService = persistanceService;
        }
        public saveAsFavourite(articleId: string) {
            return this._persistanceService.save(articleId);
        }
    }

    const favController1 = new FavouritesController(
        new CookiePersitanceService()
    );

    class LocalStoragePersitanceService {
        public save(value: string): string {
            const id = getUniqueId();
            localStorage.setItem(`${id}`, value);
            return id;
        }
        public LocalStorageSupported() {
            return true;
        }
    }

    const favController = new FavouritesController(
        new LocalStoragePersitanceService() // Error
    );

}

namespace dependecy_inversion_demo_2 {

    interface PersistanceServiceInterface {
        save(value: string): string;
    }

    function getUniqueId() {
        return Math.random().toString(36).substr(2, 9);
    }

    class CookiePersitanceService {
        public save(value: string): string {
            let id = getUniqueId();
            document.cookie = `${id}=${value}`;
            return id;
        }
        public CookiesSupported() {
            return true;
        }
    }

    class FavouritesController {
        private _persistanceService: PersistanceServiceInterface;
        public constructor(persistanceService: PersistanceServiceInterface) {
            this._persistanceService = persistanceService;
        }
        public saveAsFavourite(articleId: string) {
            return this._persistanceService.save(articleId);
        }
    }

    const favController1 = new FavouritesController(
        new CookiePersitanceService()
    );

    class LocalStoragePersitanceService {
        public save(value: string): string {
            const id = getUniqueId();
            localStorage.setItem(`${id}`, value);
            return id;
        }
        public LocalStorageSupported() {
            return true;
        }
    }

    const favController = new FavouritesController(
        new LocalStoragePersitanceService() // OK
    );

}
