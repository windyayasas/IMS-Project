import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbNavChangeEvent } from '@ng-bootstrap/ng-bootstrap';
import { StudentTabTypes } from 'src/app/shared/constants/student';
import { StudentTab } from 'src/app/shared/models/student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent {

  activeId = StudentTabTypes.MYPROFILE;
  activeTab?: StudentTab;
  readonly studentTabTypes: typeof StudentTabTypes = StudentTabTypes
  tabList: StudentTab[] = [
    {
      id: 1,
      title: 'Achievement',
      active: false,
      type: StudentTabTypes.ACHIEVEMENT,
      routeTitle: 'achievements'

    },
    {
      id: 2,
      title: 'Marks',
      active: false,
      type: StudentTabTypes.MARK,
      routeTitle: 'marks'

    },
    {
      id: 3,
      title: 'My Attendance',
      active: false,
      type: StudentTabTypes.ATTENDANCE,
      routeTitle: 'attendance'

    },
    {
      id: 4,
      title: 'My Profile',
      active: false,
      type: StudentTabTypes.MYPROFILE,
      routeTitle: 'my-profile'

    }
  ];


  constructor(  private readonly router: Router,
    ) {
    this.setActive(this.tabList[0]);
  }


  setActive(item: StudentTab): void {
    this.activeTab = item;
    this.activeId = item.type;
  }

  getActive(choice: string): string {
    return this.activeId === choice ? 'active' : 'not';
  }

  async beforeTabChange(event: NgbNavChangeEvent): Promise<void> {
    console.log(event);
    
    event.preventDefault();
    // get next tab
    const index: number = this.tabList.findIndex(
      (item: StudentTab) => item.type === event.nextId
    );
    console.log(index);
    
    if (index !== -1) {
      const item: StudentTab = this.tabList[index];
      this.setActive(item);
      this.router.navigate([`/student/${item?.routeTitle}`]);
    }
   
  }




}
