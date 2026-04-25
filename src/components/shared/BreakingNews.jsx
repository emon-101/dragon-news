import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
    return (
        <div className='lg:w-4/5 mx-auto flex gap-4 justify-between items-center bg-gray-200 p-4 cursor-pointer'>
            <button className="btn bg-red-500 text-white">Latest News</button>
            <Marquee pauseOnHover={true} speed={50}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, doloribus? Ut, cum placeat accusamus reiciendis aspernatur nemo dignissimos numquam omnis nobis cumque quod facere, tempora laborum tenetur illo eligendi architecto quae quos quo officiis obcaecati, pariatur fuga. Quaerat eaque culpa, unde expedita quisquam minus cum tenetur quia cumque voluptas dolor facere eveniet aliquam voluptates qui nostrum illo possimus magni fuga impedit esse! Cum ea atque veritatis distinctio reiciendis nulla tempore possimus, architecto aliquam! Hic voluptate explicabo et, dignissimos natus deleniti voluptas, libero nemo cumque suscipit quos ullam magnam iste nisi mollitia, quibusdam id. Ducimus, harum dolorem obcaecati possimus sunt quam voluptatem, voluptate molestias quaerat omnis dolorum, enim delectus quas non? Veniam debitis voluptates inventore delectus architecto nemo dolores error non quia, voluptatum quibusdam, fuga facilis quo quidem reprehenderit dignissimos, odit iusto vero veritatis? Rerum quisquam nisi debitis soluta libero fugiat earum minima nostrum atque itaque, in hic nobis voluptatum molestias architecto a laborum illum magni dolores modi aliquid quos quidem deserunt? Id repudiandae corrupti quo architecto explicabo saepe aliquam sapiente illo? Nostrum, fugiat. Beatae expedita molestias quasi ex modi, vero vel, ea ullam nulla, culpa at ipsam possimus nisi est aspernatur eos ipsum temporibus sunt nam voluptate perferendis. Possimus incidunt quasi eaque excepturi? Voluptas laudantium aut aliquid perferendis dicta velit sed quasi distinctio animi eaque dolores beatae facere aspernatur commodi totam harum modi eos ut doloribus, assumenda quia temporibus libero. Officiis, repellat unde vitae quis quaerat tenetur exercitationem dignissimos animi error pariatur, veniam ipsam doloribus natus aliquid alias, rem perferendis!
            </Marquee>
        </div>
    );
};

export default BreakingNews;