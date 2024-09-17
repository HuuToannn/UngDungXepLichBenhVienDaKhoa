import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './DoctorList.css';

interface Doctor {
  id: number;
  name: string;
  specialization: string;
}

const DoctorList = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([
    { id: 1, name: 'Nguyen Van A', specialization: 'Nội tổng quát' },
    { id: 2, name: 'Tran Thi B', specialization: 'Ngoại khoa' },
    { id: 3, name: 'Le Thi C', specialization: 'Nhi khoa' }
  ]);

  const [doctorForm, setDoctorForm] = useState<Doctor>({ id: 0, name: '', specialization: '' });
  const [dialogVisible, setDialogVisible] = useState(false);
  const [editDialogVisible, setEditDialogVisible] = useState(false);
  const [deleteDialogVisible, setDeleteDialogVisible] = useState(false);
  const [doctorToDelete, setDoctorToDelete] = useState<Doctor | null>(null);
  const toast = React.useRef<Toast>(null);

  const addDoctor = () => {
    if (!doctorForm.name || !doctorForm.specialization) {
      if (toast.current) {
        toast.current.show({ severity: 'error', summary: 'Lỗi', detail: 'Tên bác sĩ và chuyên khoa là bắt buộc!', life: 3000 });
      }
      return;
    }
    setDoctors((prevDoctors: Doctor[]) => [
      ...prevDoctors,
      { ...doctorForm, id: prevDoctors.length + 1 }
    ]);
    setDialogVisible(false);
    setDoctorForm({ id: 0, name: '', specialization: '' });
    if (toast.current) {
      toast.current.show({ severity: 'success', summary: 'Thành công', detail: 'Bác sĩ đã được thêm!', life: 3000 });
    }
  };

  const updateDoctor = () => {
    if (!doctorForm.name || !doctorForm.specialization) {
      if (toast.current) {
        toast.current.show({ severity: 'error', summary: 'Lỗi', detail: 'Tên bác sĩ và chuyên khoa là bắt buộc!', life: 3000 });
      }
      return;
    }
    setDoctors((prevDoctors: Doctor[]) =>
      prevDoctors.map(doctor => (doctor.id === doctorForm.id ? doctorForm : doctor))
    );
    setEditDialogVisible(false);
    setDoctorForm({ id: 0, name: '', specialization: '' });
    if (toast.current) {
      toast.current.show({ severity: 'warn', summary: 'Cập nhật', detail: 'Bác sĩ đã được cập nhật!', life: 3000 });
    }
  };

  const deleteDoctor = () => {
    if (doctorToDelete) {
      setDoctors((prevDoctors: Doctor[]) => prevDoctors.filter(doctor => doctor.id !== doctorToDelete.id));
      setDeleteDialogVisible(false);
      setDoctorToDelete(null);
      if (toast.current) {
        toast.current.show({ severity: 'success', summary: 'Thành công', detail: 'Bác sĩ đã được xóa!', life: 3000 });
      }
    }
  };

  const confirmDelete = (doctor: Doctor) => {
    setDoctorToDelete(doctor);
    setDeleteDialogVisible(true);
  };

  const openEditDialog = (doctor: Doctor) => {
    setDoctorForm(doctor);
    setEditDialogVisible(true);
  };

  return (
    <div className="p-4">
      <Toast ref={toast} />
      <h2 className="text-xl font-bold">Danh sách bác sĩ</h2><br></br>
      <Button
        label="Thêm bác sĩ"
        icon="pi pi-plus"
        onClick={() => setDialogVisible(true)}
        className=" rounded-md px-4 py-2 shadow-md hover:bg-blue-500 transition-colors duration-300"
      />
      <DataTable value={doctors} className="mt-4 p-datatable-custom" paginator rows={10} tableStyle={{ minWidth: '50rem' }}>
        <Column field="id" header="ID" />
        <Column field="name" header="Tên bác sĩ" />
        <Column field="specialization" header="Chuyên khoa" />
        <Column
          header="Hành động"
          body={(doctor: Doctor) => (
            <>
              <Button icon="pi pi-pencil" onClick={() => openEditDialog(doctor)} className="p-button-warning mr-2" />
              <Button icon="pi pi-trash" severity='danger'  onClick={() => confirmDelete(doctor)} className="p-button-danger" />
            </>
          )}
        />
      </DataTable>

      <Dialog
        header="Thêm bác sĩ"
        visible={dialogVisible}
        onHide={() => setDialogVisible(false)}
        className="p-dialog-custom"
      >
        <div className="p-field mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Tên bác sĩ</label>
          <InputText
            id="name"
            value={doctorForm.name}
            onChange={(e) => setDoctorForm({ ...doctorForm, name: e.target.value })}
            className="p-inputtext-custom mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>
        <div className="p-field mb-4">
          <label htmlFor="specialization" className="block text-sm font-medium text-gray-700">Chuyên khoa</label>
          <InputText
            id="specialization"
            value={doctorForm.specialization}
            onChange={(e) => setDoctorForm({ ...doctorForm, specialization: e.target.value })}
            className="p-inputtext-custom mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          />
        </div>
        <div className="flex justify-end space-x-2">
          <Button
            label="Lưu"
            icon="pi pi-check"
            onClick={addDoctor}
            className="bg-blue-500 text-white rounded-md px-4 py-2 shadow-md hover:bg-blue-600 transition-colors duration-300"
          />
        </div>
      </Dialog>


      <Dialog
        header="Chỉnh sửa bác sĩ"
        visible={editDialogVisible}
        onHide={() => setEditDialogVisible(false)}
        className="p-dialog-custom"
      >
        <div className="p-field mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Tên bác sĩ</label>
          <InputText
            id="name"
            value={doctorForm.name}
            onChange={(e) => setDoctorForm({ ...doctorForm, name: e.target.value })}
            className="p-inputtext-custom mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200 focus:ring-opacity-50"
          />
        </div>
        <div className="p-field mb-4">
          <label htmlFor="specialization" className="block text-sm font-medium text-gray-700">Chuyên khoa</label>
          <InputText
            id="specialization"
            value={doctorForm.specialization}
            onChange={(e) => setDoctorForm({ ...doctorForm, specialization: e.target.value })}
            className="p-inputtext-custom mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-yellow-500 focus:ring focus:ring-yellow-200 focus:ring-opacity-50"
          />
        </div>
        <div className="flex justify-end space-x-2">
          <Button
            label="Cập nhật"
            icon="pi pi-check"
            onClick={updateDoctor}
            className="bg-yellow-500 text-white rounded-md px-4 py-2 shadow-md hover:bg-yellow-600 transition-colors duration-300"
          />
        </div>
      </Dialog>

      <Dialog
      header="Xác nhận xóa"
      visible={deleteDialogVisible}
      onHide={() => setDeleteDialogVisible(false)}
      className="p-dialog-delete"
    >
      <p className="text-gray-700">Bạn có chắc chắn muốn xóa bác sĩ này không?</p>
      <div className="flex justify-end space-x-2 mt-4">
        <Button
          label="Hủy"
          icon="pi pi-times"
          onClick={() => setDeleteDialogVisible(false)}
          className="p-button-secondary bg-gray-500 text-white rounded-md px-4 py-2 shadow-md hover:bg-gray-600 transition-colors duration-300"
        />
        <Button
          label="Xóa"
          icon="pi pi-trash"
          onClick={deleteDoctor}
          className="p-button-danger bg-red-500 text-white rounded-md px-4 py-2 shadow-md hover:bg-red-600 transition-colors duration-300"
        />
      </div>
    </Dialog>
    </div>
  );
};

export default DoctorList;
