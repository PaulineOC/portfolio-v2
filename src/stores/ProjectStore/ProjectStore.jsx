import {observable, action, toJS} from 'mobx';


import projects from '../../data/projects';

class ProjectStore {

    constructor(){
        this.allProjects = projects;
    }

    @observable
    currentProj = null;

    @observable
    currentProjFeaturedPic = null;

    @observable
    isProjDetailOpen = false;

    @action.bound
    setDetailProject(proj){
        this.currentProj = proj;
        this.openProjectDetail();
    }

    @action.bound
    openProjectDetail(){
        this.isProjDetailOpen = true;
    }

    @action.bound
    closeProjectDetail(){
        this.isProjDetailOpen = false;
        this.resetProjectDetail();
    }

    @action.bound
    resetProjectDetail(){
        this.currentProj = null;
        this.currentProjFeaturedPic = null;
    }

}

export default ProjectStore;
