import { Container } from "inversify";

import TYPES from "ioc/types";
import {
    AttributesManager,
    DirectoryManager,
    IAttributesManager,
    IDirectoryManager,
    IKeysManager,
    ISettingsManager,
    IThemesManager,
    KeysManager,
    SettingsManager,
    ThemesManager
} from "managers";

const container = new Container({ defaultScope: "Singleton" });

container.bind<IDirectoryManager>(TYPES.IDirectoryManager)
    .to(DirectoryManager).inTransientScope();
container.bind<ISettingsManager>(TYPES.ISettingsManager).to(SettingsManager);
container.bind<IKeysManager>(TYPES.IKeysManager).to(KeysManager);
container.bind<IThemesManager>(TYPES.IThemesManager).to(ThemesManager);
container.bind<IAttributesManager>(TYPES.IAttributesManager).to(AttributesManager);

export default container;
