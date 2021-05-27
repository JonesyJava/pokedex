export default class CaughtNote {
    static async confirmNote(title = 'Are you sure you want to CATCH?', icon = "success") {
        // @ts-ignore
        const res = await Swal.fire({
            position:'top',
            icon: icon,
            title: title,
            confirmButton: '#3085d6',
            confirmButtonText: 'Thanks!',
            toast: true,
            showConfirmButton: true,
         })
        if (res.isConfirmed) {
          // @ts-ignore
          Swal.fire(
            'Got Em!',
            'Pokemon has been sent to your backpack. Great work!',
            'success'
          )  
          return true
          }
          return false
        } catch (error) {
          console.error(error)
        }
    }