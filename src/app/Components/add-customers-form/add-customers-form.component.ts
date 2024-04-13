import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-customers-form',
  templateUrl: './add-customers-form.component.html',
  styleUrls: ['./add-customers-form.component.css']
})
export class AddCustomersFormComponent {
  userData: any[] = [];
  selectedUserIndex: number = -1; // Index of the selected user for updating
  userDataForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl('')
  });

  constructor(private formBuilder: FormBuilder) { }

  onSubmit() {
    const formData = this.userDataForm.value;
    if (this.selectedUserIndex !== -1) {
      // Update existing user's data
      this.userData[this.selectedUserIndex] = formData;
      this.selectedUserIndex = -1; // Reset selected user index
    } else {
      // Add new user's data
      this.userData.push(formData);
    }
    console.log(this.userData); // You can see the entered data in the console
    this.userDataForm.reset(); // Reset the form after submission
  }

  deleteUser(index: number) {
    this.userData.splice(index, 1); // Remove the item at the specified index
  }

  updateUser(user: any, index: number) {
    // Bind the selected user's data to the form for updating
    this.userDataForm.patchValue({
      name: user.name,
      email: user.email,
      address: user.address
    });
    this.selectedUserIndex = index; // Set the index of the selected user
  }
}
