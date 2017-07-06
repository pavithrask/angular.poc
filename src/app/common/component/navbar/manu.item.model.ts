export class MenuItem {
    name: string;
    label: string;
    menuItems: MenuItem[];

    constructor(name: string, label: string, menuItems: MenuItem[]) {
        this.name = name;
        this.menuItems = menuItems;
        this.label = label;
    }

    public static createMenuItem(data: string): MenuItem {
        let jsonData = JSON.parse(data);

        let menuItem = new MenuItem(jsonData.name, jsonData.label, jsonData.menItems);
        return menuItem;
    }

}