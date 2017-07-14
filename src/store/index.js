import { observable, computed, action, runInAction } from "mobx";
import fetch from 'node-fetch';
class Store{
    @observable data = [];
    @observable value = '';

    @action
    initialize()
    {
      this.data = [];
      this.value = '';
    }

    @action
    async updateData()
    {
      let v;
      try
      {
        v = await fetch('https://api.github.com/users/'+this.value+'/repos');
      }
      catch(error)
      {
        console.log(error);
      }
      const repos = await v.json();
      let newData = [];
      for(let i = 0; i < repos.length; i++)
      {
          newData.push({key: i, index: i + 1, name: repos[i]['name']});
      }
      this.data = newData
      this.value = '';
    }
    @action 
    updateValue(event)
    {
      this.value = event.target.value;
    }
}

const STORE = new Store();
export default STORE;