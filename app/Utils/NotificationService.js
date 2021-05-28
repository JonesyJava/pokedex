export default class NotificationService {
    static async confirmNote(title = 'Are you sure you want to DELETE?', icon = "warning") {
        // @ts-ignore
        const res = await Swal.fire({
            position:'top',
            icon: icon,
            title: title,
            confirmButton: '#3085d6',
            showCancelButton: true,
            confirmButtonText: 'Release',
            cancelButtonColor: '#d33',
            toast: true,
            showConfirmButton: true,
         })
        if (res.isConfirmed) {
          // @ts-ignore
          Swal.fire(
            'Released!',
            'Pokemon has been released back to the wild.',
            'success'
          )  
          return true
          }
          return false
        } catch (error) {
          console.error(error)
        }
    }
