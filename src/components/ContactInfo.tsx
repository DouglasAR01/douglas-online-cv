interface Props {
  title: string,
  phones: string[],
  emails: string[],
}
export default function ContactInfo({ title, phones, emails }: Props) {
  return (
    <section className="mb-3">
      <div className="row text-info h3">
        <div className="col-2"><i className="fa-solid fa-address-card"></i></div>
        <div className="col-10">{title}</div>
      </div>
      {
        phones.map((phone: string) => {
          return (
            <div className="row" key={phone}>
              <div className="col-1">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className="col-11">{phone}</div>
            </div>
          )
        })
      }
      {
        emails.map((email: string) => {
          return (
            <div className="row" key={email}>
              <div className="col-1">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="col-11">{email}</div>
            </div>
          )
        })
      }
    </section>
  )
}