import { CoreMenu } from "@core/types";

export const menu: CoreMenu[] = [
  // Apps & Pages

  {   id: "apps",
  type: "section",
  title: "Home",
  translate: "Home",
  icon: "home",
  children: [
    {
      id: "homeshop",
      title: "homeshop",
      translate: "home",
      type: "item",
      icon: "home",
      url: "homeshop",
    
     
          
    
        },
        // {
        //   id: "Pannier",
        //   title: "Pannier",
        //   translate: "Pannier",
        //   type: "item",
        //   icon: "shopping-bag",
        //   url: "pannier",
        // },
      ],
    },
  {  
    id: "apps",
    type: "section",
    title: "Sale",
    translate: "Sale",
    icon: "package",
    children: [
      {
        id: "checkout",
        title: "checkout",
        translate: "checkout",
        type: "item",
        icon: "dollar-sign",
        url: "caisse",
      },



                
     {
      id: "Invoice",
      title: "Invoice",
      translate: "Invoice",
      type: "item",
      icon: "layers",
      url: "facture/lister",
    },
      

      {
        id: "pay credit",
        title: "pay credit",
        translate: "pay credit",
        type: "item",
        icon: "file",
        url: "credit/payer",
      },

      {
        id: "customer",
        title: "Customer",
        translate: "Customer",
        type: "collapsible",
        icon: "users",
        children: [
          {
            id: "add",
            title: "add",
            translate: "add",
            type: "item",
            icon: "circle",
            url: "client/ajouter",
          },
          {
            id: "view",
            title: "View",
            translate: "view",
            type: "item",
            icon: "circle",
            url: "client/lister",
          },
        ],
      },

      {
        id: "cashier",
        title: "cashier",
        translate: "CashierClosing",
        type: "collapsible",
        icon: "file-text",
        children: [
          {
            id: "add",
            title: "add",
            translate: "add",
            type: "item",
            icon: "circle",
            url: "fermeturecaisse/ajouter",
          },
          {
            id: "view",
            title: "View",
            translate: "view",
            type: "item",
            icon: "circle",
            url: "fermeturecaisse/lister",
          },
          
        ],
      },
    ],
  },

  {
    id: "apps",
    type: "section",
    title: "Products",
    translate: "Products",
    icon: "package",
    children: [
      {
        id: "product",
        title: "Product",
        translate: "Product",
        type: "collapsible",
        icon: "shopping-cart",
        children: [
          {
            id: "add",
            title: "add",
            translate: "add",
            type: "item",
            icon: "circle",
            url: "produit/ajouter",
          },
          {
            id: "view",
            title: "View",
            translate: "view",
            type: "item",
            icon: "circle",
            url: "produit/lister",
          },
        ],
      },

      {
        id: "category",
        title: "category",
        translate: "Category",
        type: "collapsible",
        icon: "grid",
        children: [
          {
            id: "add",
            title: "add",
            translate: "add",
            type: "item",
            icon: "circle",
            url: "categorie/ajouter",
          },
          {
            id: "view",
            title: "View",
            translate: "view",
            type: "item",
            icon: "circle",
            url: "categorie/lister",
          },
        ],
      },
    ],
  },

  
  {
    id: "apps",
    type: "section",
    title: "Provider",
    translate: "Provider",
    icon: "package",
    children: [
      {
        id: "provider",
        title: "provider",
        translate: "Provider",
        type: "collapsible",
        icon: "truck",
        children: [
          {
            id: "add",
            title: "add",
            translate: "add",
            type: "item",
            icon: "circle",
            url: "fournisseur/ajouter",
          },
          {
            id: "view",
            title: "View",
            translate: "view",
            type: "item",
            icon: "circle",
            url: "fournisseur/lister",
          },
          
        ],
      },
    ],
  },
  

  {
    id: "apps",
    type: "section",
    title: "Administration",
    translate: "Administration",
    icon: "package",
    children: [
      {
        id: "Employe",
        title: "Employe",
        translate: "Employe",
        type: "collapsible",
        icon: "users",
        children: [
          {
            id: "add",
            title: "add",
            translate: "add",
            type: "item",
            icon: "circle",
            url: "employe/ajouter",
          },
          {
            id: "view",
            title: "View",
            translate: "view",
            type: "item",
            icon: "circle",
            url: "employe/lister",
          },
        ],
      },

     

    ],
  },
];

