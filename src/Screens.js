import React from 'react';

// MAIN screens import
import Home from 'modules/home/screens';

import Stores from 'modules/ecommerce/stores/screens';
import Basket from 'modules/ecommerce/basket/screens';
import CheckOutScreen from 'modules/ecommerce/basket/screens/CheckOutScreen';
import Orders from 'modules/ecommerce/orders/screens';
import ItemScreen from 'modules/ecommerce/orders/screens/ItemScreen';
import Messaging from 'modules/inbox/conversations/screens';
import SingleChat from 'modules/inbox/conversations/screens/SingleChat';
import Contacts from 'modules/inbox/contacts/screens';
import Settings from 'modules/settings';
import Profile from 'modules/settings/screens/Profile';
import ResetPass from 'modules/settings/screens/ResetPass';

// WITH CUSTOM HEADERS FROM ATIVE BASE TEMPLATE,  bolean props  (left,right,boody) , string props (boodyText) 
import Anothermodule1 from 'modules/anothermodule1/screens';

// with defaulst headers from @react-navigation/stack
import Anothermodule2 from 'modules/anothermodule2/screens';




// OTHER SCREENS import


// initial screen
import Login from 'modules/login/screens';
import Register from 'modules/login/screens/Register';
// initial screen

export const initial_screen =[
    { 
      name        :'Login',          
      component   : Login,
    },
    { 
      name        :'Register',          
      component   : Register,
    }
]


// MAIN screens objects
export const main_screen =  [
      { 
        name        :'Home',          
        component   : Home,
        text: "Home",
        headerTitle: false,
        headerLeft: false,
        headerRight: false,
        header: false,
      },
      { 
        name        :'Stores',          
        component   : Stores,
        text: "Stores",
        headerTitle: false,
        headerLeft: false,
        headerRight: false,
        header: false,
      },
      { 
        name        :'Basket',          
        component   : Basket,
        text: "Basket",
        headerTitle: false,
        headerLeft: false,
        headerRight: false,
        header: false,
      },
      { 
        name        :'Orders',          
        component   : Orders,
        text: "Orders",
        headerTitle: false,
        headerLeft: false,
        headerRight: false,
        header: false,
      },
      { 
        name        :'ItemScreen',          
        component   : ItemScreen,
        text: "ItemScreen",
        headerTitle: false,
        headerLeft: false,
        headerRight: false,
        header: false,
      },
      { 
        name        :'Messaging',          
        component   : Messaging,
        text: "Messaging",
        headerTitle: false,
        headerLeft: false,
        headerRight: false,
        header: false,
      },
      { 
        name        :'SingleChat',          
        component   : SingleChat,
        text: "SingleChat",
        headerTitle: false,
        headerLeft: false,
        headerRight: false,
        header: false,
      },
      { 
        name        :'Contacts',          
        component   : Contacts,
        text: "Contacts",
        headerTitle: false,
        headerLeft: false,
        headerRight: false,
        header: false,
      },
      { 
        name        :'Settings',          
        component   : Settings,
        text: "Settings",
        headerTitle: false,
        headerLeft: false,
        headerRight: false,
        header: false,
      },
      { 
        name        :'Profile',          
        component   : Profile,
        text: "Profile",
        headerTitle: false,
        headerLeft: false,
        headerRight: false,
        header: false,
      },
      { 
        name        :'ResetPass',          
        component   : ResetPass,
        text: "ResetPass",
        headerTitle: false,
        headerLeft: false,
        headerRight: false,
        header: false,
      },
      { 
        name        :'CheckOutScreen',          
        component   : CheckOutScreen,
        text: "CheckOutScreen",
        headerTitle: false,
        headerLeft: false,
        headerRight: false,
        header: false,
      },
  ]


// export const welcome_screen =  [

//       { 
//         name        :'Welcome',          
//         component   : Welcome,
//       }
//   ]


    // OTHER SCREENS  objects
  export const other_screen =   [
    { 
      name        :'Anothermodule1',          
      component   : Anothermodule1,
      text: "Anothermodule1",
      headerTitle: false,
      headerLeft: true,
      headerRight: true,
      header: true,
    },
    { 
      name        :'Anothermodule2',          
      component   : Anothermodule2,
      text: "Anothermodule2",
      headerTitle: true,
      headerLeft: true,
      headerRight: true,
      header: true,
    },
  ]




