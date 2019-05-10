namespace liskov_substitution_principle {

    interface PersistanceServiceInterface {
        save(value: string): string;
    }

    function getUniqueId() {
        return Math.random().toString(36).substr(2, 9);
    }

    class CookiePersitanceService implements PersistanceServiceInterface {
        public save(value: string): string {
            let id = getUniqueId();
            document.cookie = `${id}=${value}`;
            return id;
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

    class LocalStoragePersitanceService implements PersistanceServiceInterface {
        public save(value: string): string {
            const id = getUniqueId();
            localStorage.setItem(`${id}`, value);
            return id;
        }
    }

    const favController = new FavouritesController(
        new LocalStoragePersitanceService()
    );

}
