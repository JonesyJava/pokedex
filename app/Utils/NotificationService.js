export default class NotificationService {
    static async confirmNote(title = 'Are you sure you want to DELETE?', icon = "warning") {
        // @ts-ignore
        const res = await Swal.fire({
            position:'top-end',
            icon: icon,
            title: title,
            showCancelButton: true,
            confirmButton: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete this.',
            toast: true,
            showConfirmButton: true,
         })
        if (res.isConfirmed) {
          // @ts-ignore
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )  
          return true
          }
          return false
        } catch (error) {
          console.error(error)
        }
    }
