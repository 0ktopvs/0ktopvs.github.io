import foto from '../pictures/foto_profilo.jpg'

const RoundedImage = () => {
    return (
      <div style={{
        width: '170px',
        height: '170px',
        overflow: 'hidden',
        borderRadius: '50%',
        border: 'solid 5px black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '50px',
        marginBottom: '30px',
        boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.4)',

      }}>
        <img
          src={foto}
          alt="Rounded"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>
    );
  };
  
  export default RoundedImage;
  