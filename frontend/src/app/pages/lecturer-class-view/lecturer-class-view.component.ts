import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

import "bootstrap";
@Component({
  selector: "lecturer-class-view",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./lecturer-class-view.component.html",
  styleUrl: "./lecturer-class-view.component.css",
})
export class LecturerClassViewComponent {
  activeTab: string = "schedule"; // Default active tab
  showInviteModal: boolean = false;
  showRemoveModal: boolean = false;
  // Define the scheduleData array
  scheduleData = [
    { date: "01/05/2020", startTime: "9:00", endTime: "10:30" },
    { date: "01/05/2020", startTime: "1:00", endTime: "2:30" },
    { date: "02/05/2020", startTime: "9:00", endTime: "10:30" },
    { date: "02/05/2020", startTime: "1:00", endTime: "2:30" },
    { date: "03/05/2020", startTime: "9:00", endTime: "10:30" },
    { date: "03/05/2020", startTime: "1:00", endTime: "2:30" },
    { date: "04/05/2020", startTime: "9:00", endTime: "10:30" },
    { date: "04/05/2020", startTime: "1:00", endTime: "2:30" },
  ];

  memberList = [
    {
      no: 0,
      fullName: "Tran Hong Ngoc",
      id: "00000",
      role: "Lecturer",
      eligibility: "",
    },
    {
      no: 1,
      fullName: "student 1",
      id: "14842",
      role: "Student",
      eligibility: "Eligible",
    },
    {
      no: 2,
      fullName: "student 2",
      id: "14843",
      role: "Student",
      eligibility: "Ineligible",
    },
    {
      no: 3,
      fullName: "student 3",
      id: "14844",
      role: "Student",
      eligibility: "Ineligible",
    },
  ];

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  selectedItem: any;
  // Define the viewItem method

  viewItem(item: any) {
    this.selectedItem = item;
  }

  // Define the editItem method
  editItem(item: any) {
    this.selectedItem = item;
  }

  close() {
    this.showInviteModal = false;
    this.showRemoveModal = false;
  }

  // ... other existing code ...
}
