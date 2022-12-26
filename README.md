# social-media
Instagram benzeri bir sosyal medya api projesi geliştirdim.
Kullanıcılar başkalarını takip edebilir paylaşımlarını beğenebilir , yorum bırakabilir , birbirlerine mesaj atabilir.
Yazı , video veya fotoğraf paylaşabilirler.
Veri tabanı olarak MySQL kullandım.
Dependency injection ilkesine uyarak geliştirdiğim için proje farklı bir veri tabanına çok kolay geçirilebilir.
Server mailleri kullanıcılara RabbitMQ teknolojisini kullanarak atar.
Kullanıcı kayıt olduğunda mail yollama işi bir kuyruğa atılır.
Takipçi bilgileri , beğeni sayısı , paylaşılan yazılar gibi sık kullanılacak veriler hızlı bir şekilde kullanıcıya iletilmesi için redis cache yöntemi kullanılır.
Veriler redis ile önbelleğe alınır ve kullanıcı isteklerinde ön bellekten çekilir.
